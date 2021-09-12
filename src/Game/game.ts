import { createThis } from "typescript"
import PlankPlacementSpot from "../PlankPlacementSpot"
import { puzzleList } from "./puzzleList"
import { Coordinate, Direction, Directions } from "./types"
import { coordsEq, includesCoord, linearDistance } from "./utils"

// Point of contact with React
export class Game {
  currentPuzzleIndex = 0
  
  onPuzzleCompletionCallback = () => {
    const nextPuzzleIndex: number = this.currentPuzzleIndex < puzzleList.length - 1 ? this.currentPuzzleIndex + 1 : 0
    this.setPuzzle(nextPuzzleIndex)
  }

  
  // operationCallback is called upon completion of any update to the gameState
  operationCallback: () => void  = () => {}
  puzzle: Puzzle = new Puzzle(puzzleList[this.currentPuzzleIndex], {
    stateChangedCallback: this.operationCallback,
    completionCallback: this.onPuzzleCompletionCallback,
  })
  setCallback(callback: () => void) {
    this.operationCallback = callback
    this.puzzle.stateChangedCallback = callback 
  }

  setPuzzle = (puzzleIndex: number) => {
    this.currentPuzzleIndex = puzzleIndex
    this.puzzle = new Puzzle(puzzleList[puzzleIndex], {
      stateChangedCallback: this.operationCallback,
      completionCallback: this.onPuzzleCompletionCallback,
    })
    this.operationCallback()
  }
}

export interface PuzzleProps {
  title: string

  sizeX: number
  sizeY: number

  stumps: Coordinate[]
  dogPosition?: Coordinate
  start: Coordinate
  destination: Coordinate

  planks: PlankProps[]
}

export interface PuzzleCallbacks {
  stateChangedCallback: () => void
  completionCallback: () => void
}

export class Puzzle {
  title: string

  sizeX: number
  sizeY: number

  start: Coordinate
  destination: Coordinate
  playerPosition: Coordinate
  playerDirection: Direction
  dogPosition: Coordinate | null

  stumps: Coordinate[]
  planks: Plank[]

  stateChangedCallback: () => void
  completionCallback: () => void

  constructor(props: PuzzleProps, callbacks: PuzzleCallbacks){
    this.title = props.title
    this.sizeX = props.sizeX
    this.sizeY = props.sizeY
    this.start = props.start
    this.destination = props.destination
    this.playerPosition = this.start
    this.playerDirection = Direction.EAST
    this.dogPosition = props.dogPosition ?? null
    this.stumps = props.stumps
    this.planks = []
    for (const plankProps of props.planks) {
      this.planks.push(new Plank(plankProps))
    }

    this.stateChangedCallback = callbacks.stateChangedCallback
    this.completionCallback = callbacks.completionCallback
  }

  isComplete(): boolean {
    return coordsEq(this.playerPosition, this.destination)
  }

  plankPlacementSpots(): [Coordinate, Coordinate][] {
    const plankPlacementSpots: [Coordinate, Coordinate][] = []
    const currentlyCarriedPlank = this.currentlyCarriedPlank()
    if (currentlyCarriedPlank) {
      const plankLength: number = currentlyCarriedPlank.length
      const stumpsToCheckFrom: Coordinate[] = this.walkableStumps()
      const checkedStumps: Coordinate[] = []
      while (true) {
        const stump = stumpsToCheckFrom.shift()
        if (!stump) break
        for (const direction of Directions) {
          const closestStump = this.closestStumpInDirection(stump, direction)
          if (!closestStump || includesCoord(checkedStumps, stump)) continue
          if (linearDistance(stump, closestStump) === plankLength){
            if (stump.x < closestStump.x || stump.y < closestStump.y) {
              plankPlacementSpots.push([stump, closestStump])
            } else {
              plankPlacementSpots.push([closestStump, stump])
            }
          }
        }
      }
    }
    return plankPlacementSpots
  }

  walkablePlanks(): Plank[] {
    const stumpsToCheckFrom: Coordinate[] = [this.playerPosition]
    const checkedStumps: Coordinate[] = []
    const walkablePlanks: Plank[] = []
    while (true) {
      const stump = stumpsToCheckFrom.shift()
      if (!stump) break
      for (const direction of Directions) {
        const closestStump = this.closestStumpInDirection(stump, direction)
        if (!closestStump || includesCoord(checkedStumps, stump)) continue
        const plank = this.plankByCoords(stump, closestStump)
        if (plank) {
          stumpsToCheckFrom.push(closestStump)
          walkablePlanks.push(plank)
        }
      }
      checkedStumps.push(stump)
    }
    return walkablePlanks
  }

  walkableStumps(): Coordinate[] {
    const walkablePlanks: Plank[] = this.walkablePlanks()
    const walkableStumps: Coordinate[] = [this.playerPosition]
    for (const plank of walkablePlanks) {
      if (plank.start && !includesCoord(walkableStumps, plank.start)) {
        walkableStumps.push(plank.start)
      }
      if (plank.end && !includesCoord(walkableStumps, plank.end)) {
        walkableStumps.push(plank.end)
      }
    }
    return walkableStumps
  }

  plankByCoords(c1: Coordinate, c2: Coordinate): Plank | null{
    for (const plank of this.planks){
      if (plank.start && plank.end) {
        if (
          (coordsEq(c1, plank.start) && coordsEq(c2, plank.end)) ||
          (coordsEq(c1, plank.end) && coordsEq(c2, plank.start))
        ) {
          return plank
        }
      }
    }
    return null
  }

  closestStumpInDirection(c: Coordinate, d: Direction): Coordinate | null {
    if (!includesCoord(this.stumps, c)){
      throw Error()
    }
    let searchDirectionX = 0
    let searchDirectionY = 0
    if (d === Direction.NORTH){
      searchDirectionY = -1
    } else if (d === Direction.EAST) {
      searchDirectionX = 1
    } else if (d === Direction.SOUTH) {
      searchDirectionY = 1
    } else if (d === Direction.WEST) {
      searchDirectionX = -1
    }

    let searchCoordinate: Coordinate = {x: c.x, y: c.y}
    searchCoordinate.x += searchDirectionX
    searchCoordinate.y += searchDirectionY
    while (this.isCoordinateValid(searchCoordinate)) {
      if (includesCoord(this.stumps, searchCoordinate)) {
        return searchCoordinate
      }
      searchCoordinate.x += searchDirectionX
      searchCoordinate.y += searchDirectionY
    }
    return null
  }

  canMoveTo(c: Coordinate): boolean {
    return includesCoord(this.walkableStumps(), c)
  }

  canPickUpPlank(start: Coordinate, end: Coordinate) {
    const plank = this.plankByCoords(start, end)
    const walkableStumps = this.walkableStumps()
    if (!plank) return false
    if (this.currentlyCarriedPlank()) return false
    return includesCoord(walkableStumps, start) || includesCoord(walkableStumps, end)
  }

  canPutDownPlank(start: Coordinate, end: Coordinate) {
    const plankPlacementSpots = this.plankPlacementSpots()
    for (const pair of plankPlacementSpots) {
      if (
        (coordsEq(start, pair[0]) && coordsEq(end, pair[1])) ||
        (coordsEq(start, pair[1]) && coordsEq(end, pair[0]))
      ) {
        return true
      }
    }
    return false
  }

  putDownPlank(start: Coordinate, end: Coordinate){
    if (this.canPutDownPlank(start, end)) {
      const plank = this.currentlyCarriedPlank()
      if (!plank) {
        throw Error()
      }
      plank.beingCarried = false
      plank.start = start
      plank.end = end
      this.stateChangedCallback()
    }
  }

  moveTo(c: Coordinate) {
    if (!this.canMoveTo(c)) throw Error()
    this.playerPosition = c
    if (this.isComplete()) {
      this.completionCallback()
    }
    this.stateChangedCallback()
  }

  pickUpPlank(start: Coordinate, end: Coordinate) {
    if (!this.canPickUpPlank(start, end)) throw Error()
    const plank = this.plankByCoords(start, end)
    if (!plank) throw Error()
    if (this.currentlyCarriedPlank()) throw Error()
    plank.start = null
    plank.end = null
    plank.beingCarried = true
    this.stateChangedCallback()
  }

  setPlayerDirection(direction: Direction) {
    this.playerDirection = direction
  }

  isCoordinateValid(c: Coordinate): boolean {
    return (
      c.x >= 0 && c.x < this.sizeX &&
      c.y >= 0 && c.y < this.sizeY
    )
  }

  currentlyCarriedPlank(): Plank | null {
    for (const plank of this.planks) {
      if (plank.beingCarried) {
        return plank
      }
    }
    return null
  }
}

export interface PlankProps {
  start: Coordinate
  end: Coordinate
}

export class Plank {
  length: number
  beingCarried: boolean
  start: Coordinate | null
  end: Coordinate | null

  constructor(props: PlankProps){
    this.length = linearDistance(props.start, props.end)
    this.beingCarried = false
    this.start = props.start
    this.end = props.end
  }
}

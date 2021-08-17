import { linearDistance } from "./utils"

// Point of contact with React
export class Game {
  // operationCallback is called upon completion of any update to the gameState
  operationCallback: () => void  = () => {}
  puzzle: Puzzle | null = null

  setCallback(callback: () => void) {
    this.operationCallback = callback
  }

  setPuzzle(puzzle: Puzzle){
    this.puzzle = puzzle
    this.operationCallback()
  }
}

export interface PuzzleProps {
  sizeX: number
  sizeY: number

  stumps: Coordinate[]
  dogPosition?: Coordinate
  start: Coordinate
  destination: Coordinate

  planks: PlankProps[]
}

export class Puzzle {
  sizeX: number
  sizeY: number

  start: Coordinate
  destination: Coordinate
  playerPosition: Coordinate
  dogPosition: Coordinate | null

  stumps: Coordinate[]
  planks: Plank[]

  constructor(props: PuzzleProps){
    this.sizeX = props.sizeX
    this.sizeY = props.sizeY
    this.start = props.start
    this.destination = props.destination
    this.playerPosition = this.start
    this.dogPosition = props.dogPosition ?? null
    this.stumps = props.stumps
    this.planks = []
    for (const plankProps of props.planks) {
      this.planks.push(new Plank(plankProps))
    }
   
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

export type Coordinate = [number, number]

export enum Direction {
  NORTH = 0,
  EAST,
  SOUTH,
  WEST,
}

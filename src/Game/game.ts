// Point of contace with React
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
  width: number
  height: number

  stumps: Coordinate[]
  dogPosition?: Coordinate
  start: Coordinate
  destination: Coordinate

  planks: PlankProps[]
}

export class Puzzle {
  width: number
  height: number

  start: Coordinate
  destination: Coordinate
  playerPosition: Coordinate
  dogPosition: Coordinate | null

  stumps: Coordinate[]
  planks: Plank[]

  constructor(props: PuzzleProps){
    this.width = props.width
    this.height = props.height
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
  length: number
  start: Coordinate
  end: Coordinate
}

export class Plank {
  length: number
  beingCarried: boolean
  start: Coordinate | null
  end: Coordinate | null

  constructor(props: PlankProps){
    this.length = props.length
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

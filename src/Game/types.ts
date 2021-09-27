export type Coordinate = {
  x: number,
  y: number
}

export enum Direction {
  NORTH = 0,
  EAST,
  SOUTH,
  WEST,
}

export const Directions = [
  Direction.NORTH,
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST
]

export type GameProgress = {
  levelsComplete: Record<number, boolean>
}

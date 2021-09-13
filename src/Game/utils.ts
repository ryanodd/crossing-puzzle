import { Plank } from "./game"
import { Coordinate } from "./types"

export const coordsEq = (a: Coordinate, b: Coordinate) => {
  return a.x === b.x && a.y === b.y
}

export const includesCoord = (list: Coordinate[], c: Coordinate): boolean => {
  return list.some(listItem => coordsEq(listItem, c))
}

export const coordPairEq = (c1a: Coordinate, c2a: Coordinate, c1b: Coordinate, c2b: Coordinate) => {
  return (
    (coordsEq(c1a, c1b) && coordsEq(c2a, c2b)) ||
    (coordsEq(c1a, c2b) && coordsEq(c2a, c1b))
  )
}

export const plankEq = (plank: Plank, c1: Coordinate, c2: Coordinate) => {
  return (
    !!plank.start && !!plank.end && coordPairEq(plank.start, plank.end, c1, c2)
  )
}

export const linearDistance = (a: Coordinate, b: Coordinate) => {
  if (a.x === b.x){
    return Math.abs(a.y - b.y)
  } else if (a.y === b.y){
    return Math.abs(a.x - b.x)
  } else {
    throw Error();
  }
}

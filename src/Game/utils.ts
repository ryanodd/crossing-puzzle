import { Coordinate } from "./game"

export const coordsEq = (a: Coordinate, b: Coordinate) => {
  return a[0] === b[0] && a[1] === b[1]
}

export const linearDistance = (a: Coordinate, b: Coordinate) => {
  if (a[0] === b[0]){
    return Math.abs(a[1] - b[1])
  } else if (a[1] === b[1]){
    return Math.abs(a[0] - b[0])
  } else {
    throw Error;
  }
}

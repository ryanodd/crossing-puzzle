import { Coordinate } from "./types"

export const coordsEq = (a: Coordinate, b: Coordinate) => {
  return a.x === b.x && a.y === b.y
}

export const includesCoord = (list: Coordinate[], c: Coordinate): boolean => {
  return list.some(listItem => coordsEq(listItem, c))
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

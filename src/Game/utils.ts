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

export const pointsBetween = (a: Coordinate, b: Coordinate, inclusive: boolean): Coordinate[] => {
  let returnList: Coordinate[] = [] 
  if (a.x === b.x) {
    if (a.y <= b.y) {
      let pointToCheck = inclusive ? {x: a.x, y: a.y} : {x: a.x, y: a.y + 1}
      while (inclusive ? pointToCheck.y <= b.y : pointToCheck.y < b.y) {
        returnList.push({x: pointToCheck.x, y: pointToCheck.y})
        pointToCheck = {x: pointToCheck.x, y: pointToCheck.y + 1}
      }
    } else {
      let pointToCheck = inclusive ? {x: b.x, y: b.y} : {x: b.x, y: b.y + 1}
      while (inclusive ? pointToCheck.y <= a.y : pointToCheck.y < a.y) {
        returnList.push({x: pointToCheck.x, y: pointToCheck.y})
        pointToCheck = {x: pointToCheck.x, y: pointToCheck.y + 1}
      }
    }
  } else if (a.y === b.y) {
    if (a.x <= b.x) {
      let pointToCheck = inclusive ? {x: a.x, y: a.y} : {x: a.x + 1, y: a.y}
      while (inclusive ? pointToCheck.x <= b.x : pointToCheck.x < b.x) {
        returnList.push({x: pointToCheck.x, y: pointToCheck.y})
        pointToCheck = {x: pointToCheck.x + 1, y: pointToCheck.y}
      }
    } else {
      let pointToCheck = inclusive ? {x: b.x, y: b.y} : {x: b.x + 1, y: b.y}
      while (inclusive ? pointToCheck.x <= a.x : pointToCheck.x < a.x) {
        returnList.push({x: pointToCheck.x, y: pointToCheck.y})
        pointToCheck = {x: pointToCheck.x + 1, y: pointToCheck.y}
      }
    }
  }
  return returnList
}

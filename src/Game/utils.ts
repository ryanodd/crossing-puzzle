import { Coordinate } from "./game"

export const coordsEq = (a: Coordinate, b: Coordinate) => {
  return a[0] === b[0] && a[1] === b[1]
}

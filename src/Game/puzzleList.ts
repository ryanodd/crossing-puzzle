import { PuzzleProps } from "./game";

export const puzzleList: PuzzleProps[] = [
  {
    sizeX: 5,
    sizeY: 5,
    stumps: [
      [0, 0],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 3],
      [5, 5]
    ],
    start: [0, 0],
    destination: [5, 5],
    planks: [
      {
        start: [0, 0],
        end: [1, 0]
      },
      {
        start: [1, 0],
        end: [1, 2]
      }
    ]
  },
  {
    sizeX: 5,
    sizeY: 5,
    stumps: [
      [0, 0],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 3],
      [5, 5]
    ],
    start: [0, 0],
    destination: [5, 5],
    planks: [
      {
        start: [0, 0],
        end: [1, 0]
      },
      {
        start: [1, 0],
        end: [1, 2]
      }
    ]
  },
]

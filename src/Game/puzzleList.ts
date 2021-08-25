import { PuzzleProps } from "./game";

export const puzzleList: PuzzleProps[] = [
  {
    title: 'Warmup A (clickmazes.com)',
    sizeX: 7,
    sizeY: 3,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 2},
      {x: 2, y: 2},
      {x: 3, y: 1},
      {x: 4, y: 0},
      {x: 4, y: 2},
      {x: 5, y: 2},
      {x: 6, y: 1}
    ],
    start: {x: 0, y: 1},
    destination: {x: 6, y: 1},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 1, y: 1}
      },
      {
        start: {x: 1, y: 0},
        end: {x: 4, y: 0}
      },
      {
        start: {x: 2, y: 2},
        end: {x: 4, y: 2}
      }
    ]
  },
  {
    title: 'Warmup B (clickmazes.com)',
    sizeX: 10,
    sizeY: 3,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 2},
      {x: 4, y: 0},
      {x: 4, y: 1},
      {x: 5, y: 0},
      {x: 6, y: 1},
      {x: 6, y: 2},
      {x: 8, y: 0},
      {x: 8, y: 2},
      {x: 9, y: 1},
    ],
    start: {x: 0, y: 1},
    destination: {x: 9, y: 1},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 2, y: 1}
      },
      {
        start: {x: 5, y: 0},
        end: {x: 8, y: 0}
      },
      {
        start: {x: 6, y: 1},
        end: {x: 6, y: 2}
      }
    ]
  },
  {
    title: 'Warmup C (clickmazes.com)',
    sizeX: 10,
    sizeY: 3,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 4, y: 0},
      {x: 4, y: 1},
      {x: 5, y: 0},
      {x: 5, y: 2},
      {x: 6, y: 1},
      {x: 6, y: 2},
      {x: 8, y: 0},
      {x: 8, y: 2},
      {x: 9, y: 1},
    ],
    start: {x: 0, y: 1},
    destination: {x: 9, y: 1},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 2, y: 1}
      },
      {
        start: {x: 4, y: 0},
        end: {x: 4, y: 1}
      },
      {
        start: {x: 2, y: 2},
        end: {x: 5, y: 2}
      }
    ]
  },
  {
    title: 'Warmup D (clickmazes.com)',
    sizeX: 10,
    sizeY: 3,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 2},
      {x: 2, y: 0},
      {x: 2, y: 1},
      {x: 4, y: 0},
      {x: 4, y: 2},
      {x: 5, y: 1},
      {x: 5, y: 2},
      {x: 6, y: 0},
      {x: 7, y: 0},
      {x: 7, y: 1},
      {x: 8, y: 2},
      {x: 9, y: 1},
    ],
    start: {x: 0, y: 1},
    destination: {x: 9, y: 1},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 2, y: 1}
      },
      {
        start: {x: 2, y: 0},
        end: {x: 2, y: 1}
      },
      {
        start: {x: 1, y: 2},
        end: {x: 4, y: 2}
      }
    ]
  },
  {
    title: 'Warmup E (clickmazes.com)',
    sizeX: 10,
    sizeY: 3,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 2, y: 2},
      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 4, y: 1},
      {x: 4, y: 2},
      {x: 6, y: 0},
      {x: 6, y: 2},
      {x: 7, y: 1},
      {x: 7, y: 2},
      {x: 8, y: 0},
      {x: 9, y: 1},
    ],
    start: {x: 0, y: 1},
    destination: {x: 9, y: 1},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 3, y: 1}
      },
      {
        start: {x: 1, y: 0},
        end: {x: 3, y: 0}
      },
      {
        start: {x: 3, y: 0},
        end: {x: 3, y: 1}
      }
    ]
  },
  {
    title: 'Deep End (clickmazes.com)',
    sizeX: 7,
    sizeY: 5,
    stumps: [
      {x: 0, y: 1},
      {x: 1, y: 0},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 2, y: 0},
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 3, y: 2},
      {x: 3, y: 3},
      {x: 4, y: 1},
      {x: 4, y: 4},
      {x: 5, y: 0},
      {x: 5, y: 1},
      {x: 5, y: 2},
      {x: 5, y: 4},
      {x: 6, y: 3}
    ],
    start: {x: 0, y: 1},
    destination: {x: 6, y: 3},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 2, y: 1}
      },
      {
        start: {x: 1, y: 4},
        end: {x: 2, y: 4}
      },
      {
        start: {x: 4, y: 1},
        end: {x: 4, y: 4}
      }
    ]
  },
  {
    title: 'Smash Hit (clickmazes.com)',
    sizeX: 10,
    sizeY: 8,
    stumps: [
      {x: 0, y: 2},
      {x: 1, y: 0},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 6},
      {x: 2, y: 0},
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 2, y: 7},
      {x: 3, y: 1},
      {x: 3, y: 3},
      {x: 3, y: 5},
      {x: 3, y: 7},
      {x: 4, y: 0},
      {x: 4, y: 4},
      {x: 4, y: 5},
      {x: 5, y: 2},
      {x: 5, y: 5},
      {x: 5, y: 6},
      {x: 5, y: 7},
      {x: 6, y: 2},
      {x: 6, y: 3},
      {x: 6, y: 4},
      {x: 6, y: 7},
      {x: 7, y: 0},
      {x: 7, y: 2},
      {x: 7, y: 5},
      {x: 8, y: 0},
      {x: 8, y: 1},
      {x: 8, y: 3},
      {x: 8, y: 6},
      {x: 9, y: 5}
    ],
    start: {x: 0, y: 2},
    destination: {x: 9, y: 5},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 2, y: 4},
        end: {x: 2, y: 7}
      },
      {
        start: {x: 6, y: 3},
        end: {x: 6, y: 4}
      }
    ]
  },
  {
    title: 'Route-66 (clickmazes.com)',
    sizeX: 11,
    sizeY: 9,
    stumps: [
      {x: 0, y: 2},
      {x: 1, y: 0},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 7},
      {x: 1, y: 8},
      {x: 2, y: 3},
      {x: 2, y: 6},
      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 2},
      {x: 3, y: 5},
      {x: 3, y: 6},
      {x: 3, y: 7},
      {x: 4, y: 0},
      {x: 4, y: 3},
      {x: 4, y: 4},
      {x: 4, y: 6},
      {x: 4, y: 8},
      {x: 5, y: 2},
      {x: 5, y: 3},
      {x: 5, y: 7},
      {x: 6, y: 1},
      {x: 6, y: 5},
      {x: 6, y: 8},
      {x: 7, y: 1},
      {x: 7, y: 2},
      {x: 7, y: 4},
      {x: 7, y: 5},
      {x: 8, y: 0},
      {x: 8, y: 3},
      {x: 8, y: 6},
      {x: 8, y: 7},
      {x: 9, y: 1},
      {x: 9, y: 3},
      {x: 9, y: 5},
      {x: 9, y: 7},
      {x: 9, y: 8},
      {x: 10, y: 6}
    ],
    start: {x: 0, y: 2},
    destination: {x: 10, y: 6},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 3, y: 2}
      },
      {
        start: {x: 4, y: 8},
        end: {x: 6, y: 8}
      },
      {
        start: {x: 6, y: 5},
        end: {x: 7, y: 5}
      }
    ]
  },
  {
    title: 'Staircase (clickmazes.com - SwampBeast)',
    sizeX: 7,
    sizeY: 5,
    stumps: [
      {x: 0, y: 2},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 2, y: 0},
      {x: 2, y: 2},
      {x: 3, y: 1},
      {x: 3, y: 2},
      {x: 3, y: 3},
      {x: 4, y: 0},
      {x: 4, y: 3},
      {x: 4, y: 4},
      {x: 5, y: 1},
      {x: 5, y: 4},
      {x: 6, y: 2}
    ],
    start: {x: 0, y: 2},
    destination: {x: 6, y: 2},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 1, y: 0},
        end: {x: 2, y: 0}
      },
      {
        start: {x: 5, y: 1},
        end: {x: 5, y: 4}
      }
    ]
  },
  {
    title: 'Six-squared (clickmazes.com - SwampBeast)',
    sizeX: 8,
    sizeY: 6,
    stumps: [
      {x: 0, y: 2},

      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 5},

      {x: 2, y: 2},
      {x: 2, y: 4},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 4},

      {x: 4, y: 1},
      {x: 4, y: 2},
      {x: 4, y: 3},
      {x: 4, y: 5},

      {x: 5, y: 1},
      {x: 5, y: 3},
      {x: 5, y: 4},

      {x: 6, y: 0},
      {x: 6, y: 2},
      {x: 6, y: 5},

      {x: 7, y: 5}
    ],
    start: {x: 0, y: 2},
    destination: {x: 7, y: 5},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 3, y: 0},
        end: {x: 6, y: 0}
      },
      {
        start: {x: 3, y: 1},
        end: {x: 4, y: 1}
      }
    ]
  },
  {
    title: 'Six-squared (clickmazes.com - SwampBeast)',
    sizeX: 8,
    sizeY: 6,
    stumps: [
      {x: 0, y: 2},

      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 5},

      {x: 2, y: 2},
      {x: 2, y: 4},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 4},

      {x: 4, y: 1},
      {x: 4, y: 2},
      {x: 4, y: 3},
      {x: 4, y: 5},

      {x: 5, y: 1},
      {x: 5, y: 3},
      {x: 5, y: 4},

      {x: 6, y: 0},
      {x: 6, y: 2},
      {x: 6, y: 5},

      {x: 7, y: 5}
    ],
    start: {x: 0, y: 2},
    destination: {x: 7, y: 5},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 3, y: 0},
        end: {x: 6, y: 0}
      },
      {
        start: {x: 3, y: 1},
        end: {x: 4, y: 1}
      }
    ]
  },
  {
    title: 'Expressway (clickmazes.com - SwampBeast)',
    sizeX: 9,
    sizeY: 7,
    stumps: [
      {x: 0, y: 2},

      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 4},
      {x: 1, y: 5},
      {x: 1, y: 6},

      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 2, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 3},
      {x: 3, y: 4},
      {x: 3, y: 5},

      {x: 4, y: 4},
      {x: 4, y: 6},

      {x: 5, y: 2},
      {x: 5, y: 3},
      {x: 5, y: 5},
      {x: 5, y: 6},

      {x: 6, y: 0},
      {x: 6, y: 3},
      {x: 6, y: 5},

      {x: 7, y: 0},
      {x: 7, y: 3},
      {x: 7, y: 4},
      {x: 7, y: 6},

      {x: 8, y: 2}
    ],
    start: {x: 0, y: 2},
    destination: {x: 8, y: 2},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 3, y: 4},
        end: {x: 4, y: 4}
      },
      {
        start: {x: 4, y: 4},
        end: {x: 7, y: 4}
      }
    ]
  },
  {
    title: 'Box Step (clickmazes.com - SwampBeast)',
    sizeX: 9,
    sizeY: 7,
    stumps: [
      {x: 0, y: 1},

      {x: 1, y: 0},
      {x: 1, y: 3},
      {x: 1, y: 6},

      {x: 2, y: 2},
      {x: 2, y: 5},
      {x: 2, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 2},
      {x: 3, y: 3},
      {x: 3, y: 4},

      {x: 4, y: 0},
      {x: 4, y: 2},
      {x: 4, y: 4},

      {x: 5, y: 1},
      {x: 5, y: 2},
      {x: 5, y: 3},
      {x: 5, y: 4},
      {x: 5, y: 6},

      {x: 6, y: 2},

      {x: 7, y: 0},
      {x: 7, y: 1},
      {x: 7, y: 3},

      {x: 8, y: 4}
    ],
    start: {x: 0, y: 1},
    destination: {x: 8, y: 4},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 3, y: 1}
      },
      {
        start: {x: 3, y: 1},
        end: {x: 5, y: 1}
      },
      {
        start: {x: 3, y: 3},
        end: {x: 3, y: 4}
      }
    ]
  },
  {
    title: 'Brute 66 (clickmazes.com - SwampBeast)',
    sizeX: 9,
    sizeY: 8,
    stumps: [
      {x: 0, y: 2},

      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 6},

      {x: 2, y: 0},
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 2, y: 7},

      {x: 3, y: 0},
      {x: 3, y: 3},
      {x: 3, y: 5},
      {x: 3, y: 6},

      {x: 4, y: 1},
      {x: 4, y: 3},
      {x: 4, y: 4},
      {x: 4, y: 7},

      {x: 5, y: 2},
      {x: 5, y: 3},
      {x: 5, y: 5},

      {x: 6, y: 0},
      {x: 6, y: 1},
      {x: 6, y: 4},
      {x: 6, y: 5},
      {x: 6, y: 6},

      {x: 7, y: 0},
      {x: 7, y: 1},
      {x: 7, y: 3},
      {x: 7, y: 5},
      {x: 7, y: 7},

      {x: 8, y: 6}
    ],
    start: {x: 0, y: 2},
    destination: {x: 8, y: 6},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 2, y: 2}
      },
      {
        start: {x: 1, y: 0},
        end: {x: 1, y: 1}
      },
      {
        start: {x: 6, y: 1},
        end: {x: 6, y: 4}
      }
    ]
  },
  {
    title: 'Trebuchet V2 (clickmazes.com - SwampBeast)',
    sizeX: 11,
    sizeY: 9,
    stumps: [
      {x: 0, y: 2},

      {x: 1, y: 2},
      {x: 1, y: 3},
      {x: 1, y: 6},

      {x: 2, y: 0},
      {x: 2, y: 3},
      {x: 2, y: 5},

      {x: 3, y: 0},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 8},

      {x: 4, y: 2},
      {x: 4, y: 4},
      {x: 4, y: 6},
      {x: 4, y: 8},

      {x: 5, y: 4},
      {x: 5, y: 5},
      {x: 5, y: 8},

      {x: 6, y: 0},
      {x: 6, y: 1},
      {x: 6, y: 2},
      {x: 6, y: 3},
      {x: 6, y: 4},
      {x: 6, y: 5},
      {x: 6, y: 6},
      {x: 6, y: 7},
      {x: 6, y: 8},

      {x: 7, y: 0},
      {x: 7, y: 3},
      {x: 7, y: 7},
      {x: 7, y: 8},

      {x: 8, y: 1},
      {x: 8, y: 3},
      {x: 8, y: 5},

      {x: 9, y: 0},
      {x: 9, y: 1},
      {x: 9, y: 6},
      {x: 9, y: 7},
      {x: 9, y: 8},

      {x: 10, y: 8}
    ],
    start: {x: 0, y: 2},
    destination: {x: 10, y: 8},
    planks: [
      {
        start: {x: 0, y: 2},
        end: {x: 1, y: 2}
      },
      {
        start: {x: 1, y: 2},
        end: {x: 4, y: 2}
      },
      {
        start: {x: 7, y: 0},
        end: {x: 9, y: 0}
      }
    ]
  },
  {
    title: 'Shuttle (clickmazes.com - SwampBeast)',
    sizeX: 11,
    sizeY: 9,
    stumps: [
      {x: 0, y: 1},

      {x: 1, y: 0},
      {x: 1, y: 2},
      {x: 1, y: 5},
      {x: 1, y: 8},

      {x: 2, y: 5},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 6},
      {x: 3, y: 7},
      {x: 3, y: 8},

      {x: 4, y: 0},
      {x: 4, y: 2},
      {x: 4, y: 4},
      {x: 4, y: 5},

      {x: 5, y: 4},
      {x: 5, y: 6},
      {x: 5, y: 8},

      {x: 6, y: 0},
      {x: 6, y: 1},
      {x: 6, y: 5},
      {x: 6, y: 6},
      {x: 6, y: 7},
      {x: 6, y: 8},

      {x: 7, y: 5},
      {x: 7, y: 8},

      {x: 8, y: 1},
      {x: 8, y: 3},
      {x: 8, y: 8},

      {x: 9, y: 0},
      {x: 9, y: 1},
      {x: 9, y: 2},
      {x: 9, y: 3},
      {x: 9, y: 5},
      {x: 9, y: 6},

      {x: 10, y: 8}
    ],
    start: {x: 0, y: 1},
    destination: {x: 10, y: 8},
    planks: [
      {
        start: {x: 0, y: 1},
        end: {x: 3, y: 1}
      },
      {
        start: {x: 3, y: 4},
        end: {x: 4, y: 4}
      },
      {
        start: {x: 9, y: 3},
        end: {x: 9, y: 5}
      }
      

      
    ]
  },
  {
    title: 'Pennsylvania (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 0},

      {x: 1, y: 8},
      {x: 1, y: 4},
      {x: 1, y: 5},
      
      {x: 2, y: 5},
      {x: 2, y: 6},
      {x: 2, y: 8},
      {x: 2, y: 9},

      {x: 3, y: 0},
      {x: 3, y: 3},
      {x: 3, y: 4},
      {x: 3, y: 9},
     
      {x: 4, y: 1},
      {x: 4, y: 4},
      {x: 4, y: 5},
      {x: 4, y: 8},
      {x: 4, y: 9},

      {x: 5, y: 0},
      {x: 5, y: 1},
      {x: 5, y: 5},
      {x: 5, y: 9},

      {x: 6, y: 2},
      {x: 6, y: 3},
      {x: 6, y: 6},

      {x: 7, y: 0},
      {x: 7, y: 1},
      {x: 7, y: 2},
      {x: 7, y: 4},
      {x: 7, y: 7},

      {x: 8, y: 2},
      {x: 8, y: 4},
      {x: 8, y: 5},
      {x: 8, y: 8},
      {x: 8, y: 9},

      {x: 9, y: 0},
      {x: 9, y: 3},
      {x: 9, y: 5},
      {x: 9, y: 6},
      {x: 9, y: 9},
      

      {x: 10, y: 0},
      {x: 10, y: 3},
      {x: 10, y: 6},

      {x:11, y:9},
    ],
    start: {x: 0, y: 0},
    destination: {x: 11, y: 9},
    planks: [
      {
        start: {x: 0, y: 0},
        end: {x: 3, y: 0}
      },
      {
        start: {x: 2, y: 6},
        end: {x: 2, y: 8}
      },
      {
        start: {x: 9, y: 0},
        end: {x: 10, y: 0}
      }
      

      
    ]
  },
  {
    title: 'Parallel Universe (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 8},

      {x: 1, y: 0},
      {x: 1, y: 4},
      {x: 1, y: 7},
      
      {x: 2, y: 4},
      {x: 2, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 1},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 9},
     
      {x: 4, y: 0},
      {x: 4, y: 1},
      {x: 4, y: 4},
      {x: 4, y: 8},

      {x: 5, y: 3},
      {x: 5, y: 7},
      {x: 5, y: 9},

      {x: 6, y: 1},
      {x: 6, y: 2},
      {x: 6, y: 6},
      {x: 6, y: 7},
      {x: 6, y: 9},

      {x: 7, y: 1},
      {x: 7, y: 5},
      {x: 7, y: 8},
      {x: 7, y: 9},

      {x: 8, y: 0},
      {x: 8, y: 4},
      {x: 8, y: 7},

      {x: 9, y: 3},
      {x: 9, y: 5},
      {x: 9, y: 7},
      {x: 9, y: 8},
      

      {x: 10, y: 2},
      {x: 10, y: 5},
      {x: 10, y: 9},

      {x:11, y:1},
    ],
    start: {x: 0, y: 8},
    destination: {x: 11, y: 1},
    planks: [
      {
        start: {x: 0, y: 8},
        end: {x: 4, y: 8}
      },
      {
        start: {x: 3, y: 0},
        end: {x: 4, y: 0}
      },
      {
        start: {x: 3, y: 1},
        end: {x: 3, y: 4}
      },
      {
        start: {x: 3, y: 9},
        end: {x: 5, y: 9}
      }
      

      
    ]
  },
  {
    title: 'Special Delivery (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 8},

      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 2},
      {x: 1, y: 5},
      
      {x: 2, y: 1},
      {x: 2, y: 6},
      {x: 2, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 9},
     
      {x: 4, y: 1},
      {x: 4, y: 2},
      {x: 4, y: 4},
      {x: 4, y: 8},

      {x: 5, y: 3},
      {x: 5, y: 7},

      {x: 6, y: 2},
      {x: 6, y: 6},
      {x: 6, y: 7},
      {x: 6, y: 9},

      {x: 7, y: 0},
      {x: 7, y: 6},

      {x: 8, y: 2},
      {x: 8, y: 4},
      {x: 8, y: 6},
      {x: 8, y: 8},

      {x: 9, y: 0},
      {x: 9, y: 1},
      {x: 9, y: 2},
      {x: 9, y: 3},
      {x: 9, y: 6},
      {x: 9, y: 7},
      {x: 9, y: 9},
      

      {x: 10, y: 8},

      {x:11, y:1},
    ],
    start: {x: 0, y: 8},
    destination: {x: 11, y: 1},
    planks: [
      {
        start: {x: 0, y: 8},
        end: {x: 4, y: 8}
      },
      {
        start: {x: 1, y: 2},
        end: {x: 4, y: 2}
      },
      {
        start: {x: 4, y: 1},
        end: {x: 4, y: 2}
      },
      {
        start: {x: 8, y: 8},
        end: {x: 10, y: 8}
      }
      

      
    ]
  },
  {
    title: 'Junior (clickmazes.com - SwampBeast)',
    sizeX: 10,
    sizeY: 8,
    stumps: [
      {x: 0, y: 0},

      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 3},
      {x: 3, y: 5},
      {x: 3, y: 7},
     
      {x: 4, y: 0},
      {x: 4, y: 2},
      {x: 4, y: 5},

      {x: 5, y: 1},
      {x: 5, y: 3},
      {x: 5, y: 7},

      {x: 6, y: 0},
      {x: 6, y: 1},
      {x: 6, y: 4},
      {x: 6, y: 5},
      {x: 6, y: 7},


      {x: 7, y: 0},
      {x: 7, y: 2},
      {x: 7, y: 7},

      {x: 8, y: 0},
      {x: 8, y: 3},
      {x: 8, y: 7},

      {x: 9, y: 5},
      
      

      
    ],
    start: {x: 0, y: 0},
    destination: {x: 9, y: 5},
    planks: [
      {
        start: {x: 0, y: 0},
        end: {x: 1, y: 0}
      },
      {
        start: {x: 1, y: 1},
        end: {x: 1, y: 3}
      },
      {
        start: {x: 1, y: 3},
        end: {x: 1, y: 6}
      },
      {
        start: {x: 5, y: 3},
        end: {x: 5, y: 7}
      },
      {
        start: {x: 7, y: 2},
        end: {x: 7, y: 7}
      }
      

      
    ]
  },
  {
    title: 'Stack of Five (clickmazes.com - SwampBeast)',
    sizeX: 11,
    sizeY: 9,
    stumps: [
      {x: 0, y: 4},

      {x: 1, y: 0},
      {x: 1, y: 2},
      {x: 1, y: 3},
      {x: 1, y: 5},
      {x: 1, y: 8},
      
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 6},

      {x: 3, y: 0},
      {x: 3, y: 3},
      {x: 3, y: 4},
      {x: 3, y: 7},
      {x: 3, y: 8},
     
      {x: 5, y: 1},
      {x: 5, y: 2},

      {x: 6, y: 1},
      {x: 6, y: 4},
      {x: 6, y: 5},
      {x: 6, y: 6},

      {x: 7, y: 2},
      {x: 7, y: 4},
      {x: 7, y: 6},
      {x: 7, y: 8},

      {x: 8, y: 0},
      {x: 8, y: 2},
      {x: 8, y: 3},
      {x: 8, y: 4},
      {x: 8, y: 5},
      {x: 8, y: 6},
      {x: 8, y: 7},
      {x: 8, y: 8},

      {x: 9, y: 3},
      {x: 9, y: 4},
      {x: 9, y: 8},
      
      {x: 10, y: 6},

    ],
    start: {x: 0, y: 4},
    destination: {x: 10, y: 6},
    planks: [
      {
        start: {x: 0, y: 4},
        end: {x: 3, y: 4}
      },
      {
        start: {x: 1, y: 0},
        end: {x: 3, y: 0}
      },
      {
        start: {x: 5, y: 1},
        end: {x: 6, y: 1}
      },
      {
        start: {x: 2, y: 6},
        end: {x: 6, y: 6}
      },
      {
        start: {x: 3, y: 7},
        end: {x: 8, y: 7}
      }
      

      
    ]
  },
  {
    title: 'Conundrum (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 6},

      {x: 1, y: 1},
      {x: 1, y: 3},
      {x: 1, y: 5},
      {x: 1, y: 6},
      {x: 1, y: 9},
      
      {x: 2, y: 4},
      {x: 2, y: 6},
      {x: 2, y: 9},

      {x: 3, y: 1},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 6},
      {x: 3, y: 9},
     
      {x: 4, y: 2},
      {x: 4, y: 4},
      {x: 4, y: 8},

      {x: 5, y: 0},
      {x: 5, y: 2},
      {x: 5, y: 3},
      {x: 5, y: 7},
      {x: 5, y: 8},
      {x: 5, y: 9},

      {x: 6, y: 6},

      {x: 7, y: 3},

      {x: 8, y: 0},
      {x: 8, y: 5},
      {x: 8, y: 8},

      {x: 9, y: 0},
      {x: 9, y: 1},
      {x: 9, y: 2},

      {x: 10, y: 1},
      {x: 10, y: 6},
      {x: 10, y: 7},
      {x: 10, y: 9},

      {x:11, y:0},
    ],
    start: {x: 0, y: 6},
    destination: {x: 11, y: 0},
    planks: [
      {
        start: {x: 0, y: 6},
        end: {x: 1, y: 6}
      },
      {
        start: {x: 1, y: 3},
        end: {x: 1, y: 5}
      },
      {
        start: {x: 1, y: 6},
        end: {x: 1, y: 9}
      },
      {
        start: {x: 4, y: 4},
        end: {x: 4, y: 8}
      },
      {
        start: {x: 10, y: 1},
        end: {x: 10, y: 6}
      }
      

      
    ]
  },
  {
    title: 'Fort Mudge (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 6},

      {x: 1, y: 0},
      {x: 1, y: 2},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 5},
      {x: 1, y: 8},
      
      {x: 2, y: 2},
      {x: 2, y: 6},
      {x: 2, y: 8},
      {x: 2, y: 9},

      {x: 3, y: 1},
      {x: 3, y: 4},
      {x: 3, y: 5},
      {x: 3, y: 6},
      {x: 3, y: 8},
      {x: 3, y: 9},

      {x: 5, y: 0},
      {x: 5, y: 4},
      {x: 5, y: 7},
      {x: 5, y: 8},
      {x: 5, y: 9},

      {x: 6, y: 2},
      {x: 6, y: 6},

      {x: 7, y: 1},
      {x: 7, y: 9},

      {x: 8, y: 2},
      {x: 8, y: 3},
      {x: 8, y: 5},
      {x: 8, y: 8},

      {x: 9, y: 1},
      {x: 9, y: 2},
      {x: 9, y: 3},
      {x: 9, y: 6},
      {x: 9, y: 7},
      
      {x: 10, y: 0},
      {x: 10, y: 3},
      {x: 10, y: 4},
      {x: 10, y: 9},

      {x:11, y:1},
    ],
    start: {x: 0, y: 6},
    destination: {x: 11, y: 1},
    planks: [
      {
        start: {x: 0, y: 6},
        end: {x: 2, y: 6}
      },
      {
        start: {x: 2, y: 2},
        end: {x: 6, y: 2}
      },
      {
        start: {x: 2, y: 8},
        end: {x: 2, y: 9}
      },
      {
        start: {x: 6, y: 6},
        end: {x: 9, y: 6}
      },
      {
        start: {x: 10, y: 4},
        end: {x: 10, y: 9}
      }
      

      
    ]
  },
  {
    title: 'Revenge (clickmazes.com - SwampBeast)',
    sizeX: 12,
    sizeY: 10,
    stumps: [
      {x: 0, y: 4},

      {x: 1, y: 2},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 6},
      {x: 1, y: 8},
      
      {x: 2, y: 1},
      {x: 2, y: 2},
      {x: 2, y: 4},
      {x: 2, y: 5},
      {x: 2, y: 7},

      {x: 3, y: 1},
      {x: 3, y: 3},
      {x: 3, y: 4},
      {x: 3, y: 7},
     
      {x: 4, y: 0},
      {x: 4, y: 1},
      {x: 4, y: 4},
      {x: 4, y: 8},

      {x: 5, y: 1},
      {x: 5, y: 3},

      {x: 6, y: 0},
      {x: 6, y: 3},
      {x: 6, y: 5},
      {x: 6, y: 7},
      {x: 6, y: 9},

      {x: 7, y: 2},
      {x: 7, y: 4},
      {x: 7, y: 9},

      {x: 8, y: 1},
      {x: 8, y: 5},
      {x: 8, y: 8},

      {x: 9, y: 2},
      {x: 9, y: 7},
      {x: 9, y: 8},

      {x: 10, y: 0},

      {x:11, y:4},
    ],
    start: {x: 0, y: 4},
    destination: {x: 11, y: 4},
    planks: [
      {
        start: {x: 0, y: 4},
        end: {x: 1, y: 4}
      },
      {
        start: {x: 2, y: 5},
        end: {x: 2, y: 7},
      },
      {
        start: {x: 6, y: 0},
        end: {x: 6, y: 3}
      },
      {
        start: {x: 7, y: 4},
        end: {x: 7, y: 9}
      },
      {
        start: {x: 8, y: 1},
        end: {x: 8, y: 5}
      }
      

      
    ]
  },
]

import styled from 'styled-components'
import { coordsEq, includesCoord } from './Game/utils'
import { Plank as PlankModel } from './Game/game'
import Plank from './Plank'
import Stump from './Stump'
import { useTypedSelector } from './types'
import { Coordinate } from './Game/types'
import PlankPlacementSpot from './PlankPlacementSpot'

const Cell = styled.div<{x: number, y: number}>`
  grid-row: ${props => props.y + 1};
  grid-column: ${props => props.x + 1};

  width: 500px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export interface GridCellProps {
  x: number
  y: number
}

const GridCell = ({x, y}: GridCellProps) => {
  const puzzle = useTypedSelector(state => state.game.puzzle)

  const hasStump: boolean = includesCoord(puzzle.stumps, {x,y})
  const planks: PlankModel[] = puzzle.planks.filter(plank => plank.start && coordsEq(plank.start, {x,y}))
  const placementSpots: [Coordinate, Coordinate][] =
    puzzle.plankPlacementSpots().filter(pair => coordsEq(pair[0], {x,y}))
  return(
    <Cell x={x} y={y}>
      {
        hasStump && (
          <Stump
            key={`${x}.${y}`}
            coordinate={{x, y}}
          /> 
        )
      }
      {
        planks.map((plank, i) => 
          <Plank
            key={i}
            plank={plank}
          />
        )
      }
      {
        placementSpots.map((pair, i) =>
          <PlankPlacementSpot
            key={i}
            start={pair[0]}
            end={pair[1]}
          />
        )
      }
    </Cell>
  )
}

export default GridCell

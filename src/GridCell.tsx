import styled from 'styled-components'
import { coordsEq } from './Game/utils'
import Plank from './Plank'
import Stump from './Stump'
import { useTypedSelector } from './types'

const Cell = styled.div<{x: number, y: number}>`
  grid-row: ${props => props.y + 1};
  grid-column: ${props => props.x + 1};

  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 255, 0.15);
  border-radius: 2px;

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
  const { game } = useTypedSelector(state => state)
  const hasStump = game.puzzle?.stumps.some(stump => coordsEq(stump, [x, y])) ?? false
  const planks = game.puzzle?.planks.filter(plank => plank.start && coordsEq(plank.start, [x,y])) ?? []
  return(
    <Cell x={x} y={y}>
      {
        hasStump && (
          <Stump /> 
        )
      }
      {
        planks.map(plank => 
          <Plank plank={plank}/>
        )
      }
    </Cell>
  )
}

export default GridCell

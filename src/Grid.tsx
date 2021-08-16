import styled from 'styled-components'
import GridCell from './GridCell'
import { useTypedSelector } from './types'


const GridComponent = styled.div<{sizeX?: number, sizeY?: number}>`
  width: min-content;
  display: grid;
  grid-gap: 2px;
`

const Grid = () => {
  const { game } = useTypedSelector(state => state)
  const sizeX = game.puzzle?.sizeX ?? 0
  const sizeY = game.puzzle?.sizeY ?? 0
  return (
    <GridComponent sizeX={sizeX} sizeY={sizeY}>
      {
        [...Array(sizeX)].map((_,x) => 
          [...Array(sizeY)].map((_,y) => 
            <GridCell key={`${x}${y}`} x={x} y={y} />
          )
        )
      }
    </GridComponent>
  )
}

export default Grid

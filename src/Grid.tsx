import styled from 'styled-components'
import GridCell from './GridCell'
import { useTypedSelector } from './types'


const GridComponent = styled.div<{sizeX?: number, sizeY?: number}>`
  width: min-content;
  display: grid;
  background: linear-gradient(to top right, #42909b, #56bbc9);
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`

const Grid = () => {
  const { puzzle } = useTypedSelector(state => state.game)
  const sizeX = puzzle?.sizeX ?? 0
  const sizeY = puzzle?.sizeY ?? 0
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

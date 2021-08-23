import styled, { css } from 'styled-components'
import { Coordinate } from './Game/types'
import { linearDistance } from './Game/utils'
import { useTypedSelector } from './types'

const PlankPlacementSlotElement = styled.button<{rotation: number, length: number}>`
  width: calc(${props => props.length} * 500px);
  height: 200px;
  background: transparent;
  
  left: 50%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center left;
  position: absolute;
  z-index: 2;

  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.4;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    background: linear-gradient(to top right, #ce954f, #F0B060);
  }
`

interface PlankProps {
  start: Coordinate,
  end: Coordinate,
}

const PlankPlacementSpot = ({start, end}: PlankProps) => {
  const puzzle = useTypedSelector(state => state.game.puzzle)
  const length = linearDistance(start, end)

  const isVertical = (start.x === end.x)
  const rotation = isVertical ? 90 : 0

  const handleClick = () => {
    puzzle.putDownPlank(start, end)
  }

  return(
    <PlankPlacementSlotElement
      onClick={handleClick}
      rotation={rotation}
      length={length}
    />
  )
}

export default PlankPlacementSpot

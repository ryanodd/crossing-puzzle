import styled, { css } from 'styled-components'
import { Coordinate } from './Game/types'
import { linearDistance } from './Game/utils'
import { useTypedSelector } from './types'

const HitboxIncreaser = styled.button<{rotation: number, length: number}>`
  // TODO decrease width so we aren't coming from the center of a stump
  width: calc(${props => props.length} * 500px);
  height: 200px;
  background: transparent;
  
  left: 50%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center left;

  position: absolute;
  z-index: 2;

  box-sizing: content-box;
  padding: 24px 0; //hitbox increase

  border: none;
  cursor: pointer;

  :hover {
    > div {
      opacity: 0.4;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
      background: linear-gradient(to top right, #ce954f, #F0B060);
    }
  }
`

const PlankPlacementSlotElement = styled.div`
  width: 100%;
  height: 100%;
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
    <HitboxIncreaser
      onClick={handleClick}
      rotation={rotation}
      length={length}
    >
      <PlankPlacementSlotElement/>
    </HitboxIncreaser>
  )
}

export default PlankPlacementSpot

import styled from 'styled-components'
import { Plank as PlankModel } from './Game/game'

const PlankElement = styled.div<{rotation: number, length: number}>`
  width: calc(${props => props.length} * (50px + 1px));
  height: 20px;
  background-color: rgb(243, 173, 94);
  left: 50%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center left;
  position: absolute;
  z-index: 2;
`

interface PlankProps {
  plank: PlankModel
}

const Plank = ({plank}: PlankProps) => {
  const isVertical = (plank?.start?.[0] === plank?.end?.[0])
  const rotation = isVertical ? 90 : 0
  return(
    <PlankElement rotation={rotation} length={plank.length} />
  )
}

export default Plank

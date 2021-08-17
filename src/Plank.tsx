import styled from 'styled-components'
import { Plank as PlankModel } from './Game/game'

const PlankElement = styled.button<{rotation: number, length: number}>`
  width: calc(${props => props.length} * 50px);
  height: 20px;
  background: linear-gradient(to top right, #ce954f, #F0B060);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
  left: 50%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center left;
  position: absolute;
  z-index: 2;

  border: none;
  cursor: pointer;
  :hover {
    filter: brightness(1.06);
  }
`

interface PlankProps {
  plank: PlankModel
}

const Plank = ({plank}: PlankProps) => {
  const isVertical = (plank?.start?.[0] === plank?.end?.[0])
  const rotation = isVertical ? 90 : 0

  const handleClick = () => {
    console.log('clicked!')
  }

  return(
    <PlankElement rotation={rotation} length={plank.length} onClick={handleClick} />
  )
}

export default Plank

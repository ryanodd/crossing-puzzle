import styled, { css } from 'styled-components'
import { Coordinate, Direction } from './Game/types'
import { coordsEq, linearDistance } from './Game/utils'
import { useTypedSelector } from './types'

const HitboxIncreaser = styled.button<{rotation: number, length: number, showRegardlessOfHover: boolean}>`
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
      background: linear-gradient(to top right, #ce954f, #F0B060);
      opacity: 0.4;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    }
  }

  ${props => props.showRegardlessOfHover && css`

    > div {
      background: linear-gradient(to top right, #ce954f, #F0B060);
      opacity: 0.4;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    }
  `}
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
  const usingKeyboard = useTypedSelector(state => state.usingKeyboard)
  const length = linearDistance(start, end)

  const isVertical = (start.x === end.x)
  const rotation = isVertical ? 90 : 0

  const playerDirection: Direction = puzzle.playerDirection
  const stumpInPlayerDirection: Coordinate | null
    = puzzle.closestStumpInDirection(puzzle.playerPosition, playerDirection)
  const showRegardlessOfHover: boolean = (
    usingKeyboard && !!stumpInPlayerDirection &&
    (
      (coordsEq(start, puzzle.playerPosition) && coordsEq(end, stumpInPlayerDirection))
      || (coordsEq(end, puzzle.playerPosition) && coordsEq(start, stumpInPlayerDirection))
    )
  )

  const handleClick = () => {
    puzzle.putDownPlank(start, end)
  }

  return(
    <HitboxIncreaser
      onClick={handleClick}
      rotation={rotation}
      length={length}
      showRegardlessOfHover={showRegardlessOfHover}
    >
      <PlankPlacementSlotElement
        
      />
    </HitboxIncreaser>
  )
}

export default PlankPlacementSpot

import styled, { css } from 'styled-components'
import { Coordinate, Direction } from './Game/types'
import { coordPairEq, coordsEq, includesCoord, linearDistance } from './Game/utils'
import Popover from './Popover'
import { useTypedSelector } from './types'

const HitboxIncreaser = styled.button<{
  rotation: number,
  length: number,
  showRegardlessOfHover: boolean,
  isTutorialPromptOpen: boolean
}>`
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

  > div {
    background: linear-gradient(to top right, #ce954f, #F0B060);
    opacity: 0;

    :hover {
      background: linear-gradient(to top right, #ce954f, #F0B060);
      opacity: 0.4;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    }

    ${props => props.showRegardlessOfHover && css`
      background: linear-gradient(to top right, #ce954f, #F0B060);
      opacity: 0.4;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    `}

    ${props => (props.isTutorialPromptOpen && css`
      @keyframes placementTutorialBlink {
        0%   {opacity: 0.4;}
        100% {opacity: 0;}
      }
      animation-name: placementTutorialBlink;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    `)}
  }
`

const PlankPlacementSlotElement = styled.div`
  width: 100%;
  height: 100%;
`

const TutorialText = styled.h2`
  margin: 0;
  text-align: center;
`

const TutorialSubtext = styled.h4`
  margin: 0;
  text-align: center;
`

interface PlankProps {
  start: Coordinate,
  end: Coordinate,
}

const PlankPlacementSpot = ({start, end}: PlankProps) => {
  const game = useTypedSelector(state => state.game)
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

  const isTutorialPromptOpen: boolean = (
    game.currentPuzzleIndex === 0 && !!puzzle.currentlyCarriedPlank() &&
    (
      (
        coordPairEq(start, end, {x: 2, y: 0}, {x: 4, y: 0}) &&
        includesCoord(puzzle.walkableStumps(), {x: 2, y: 0})
      ) ||
      (
        !puzzle.plankByCoords({x: 4, y: 0}, {x: 5, y: 0})
      ) ||
      (
        coordPairEq(start, end, {x: 5, y: 0}, {x: 7, y: 0}) &&
        includesCoord(puzzle.walkableStumps(), {x: 5, y: 0})
      ) ||
      (
        coordPairEq(start, end, {x: 0, y: 0}, {x: 2, y: 0}) &&
        includesCoord(puzzle.walkableStumps(), {x: 0, y: 0})
      )
      
    )
  )

  const handleClick = () => {
    puzzle.putDownPlank(start, end)
  }

  return(
    <Popover
      enabled={!!isTutorialPromptOpen}
      visible={!!isTutorialPromptOpen}
      content={
        <>
          <TutorialText>{'Click to place a plank!'}</TutorialText>
          <TutorialSubtext>{'Or, using the keyboard, place a plank by pressing space bar.'}</TutorialSubtext>
          <TutorialSubtext>{'You can place a plank anywhere you\'re connected to, if it fits.'}</TutorialSubtext>
        </>
      }
    >
      <HitboxIncreaser
        onClick={handleClick}
        rotation={rotation}
        length={length}
        showRegardlessOfHover={showRegardlessOfHover}
        isTutorialPromptOpen={isTutorialPromptOpen}
      >
        <PlankPlacementSlotElement
          
        />
      </HitboxIncreaser>
    </Popover>
  )
}

export default PlankPlacementSpot

import styled, { css } from 'styled-components'
import { SET_USING_KEYBOARD } from './actions'
import { Plank as PlankModel } from './Game/game'
import { Coordinate } from './Game/types'
import { coordsEq, plankEq } from './Game/utils'
import Popover from './Popover'
import { useTypedDispatch, useTypedSelector } from './types'

const PlankElement = styled.button<{
  rotation: number,
  length: number,
  ableToPickUp: boolean,
  isTutorialPromptOpen: boolean
}>`
  width: calc(${props => props.length} * 500px);
  height: 200px;
  background: linear-gradient(to top right, #d1a46d, #dbb17e);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
  left: 50%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center left;
  position: absolute;
  z-index: 2;

  border: none;

  ${props => props.ableToPickUp && css`
    :hover {
      cursor: pointer;
      filter: brightness(1.08);
    }
  `}
  ${props => (props.isTutorialPromptOpen && css`
    @keyframes plankTutorialBlink {
      0%   {filter: brightness(2.2);}
      100% {filter: brightness(1);}
    }
    animation-name: plankTutorialBlink;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  `)}
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
  plank: PlankModel
}

const Plank = ({plank}: PlankProps) => {
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)
  const dispatch = useTypedDispatch()

  // We cast to coordinate because we know we don't render planks unless they exist on the board
  const start: Coordinate = plank.start as Coordinate
  const end: Coordinate = plank.end as Coordinate

  const isVertical = (start?.x === end.x)
  const isBackwards = (start.x > end.x) || (start.y > end.y)
  const rotation = isBackwards
  ? isVertical ? 270 : 180
  : isVertical ? 90 : 0

  const isTutorialPromptOpen: boolean = (
    game.currentPuzzleIndex === 0 && !puzzle.currentlyCarriedPlank() &&
    (
      (
        plankEq(plank, puzzle.start, {x: 2, y: 0}) &&
        coordsEq(puzzle.playerPosition, {x: 2, y: 0})
      ) ||
      (
        !!(coordsEq({x: 5, y: 0}, puzzle.playerPosition)) &&
        plankEq(plank, {x: 2, y: 0}, {x: 4, y: 0})
      ) ||
      (
        !!(coordsEq({x: 4, y: 0}, puzzle.playerPosition)) &&
        plankEq(plank, {x: 2, y: 0}, {x: 4, y: 0})
      )
    )
  )

  const ableToPickUp = (
    !!plank.start && !!plank.end &&
    puzzle.canPickUpPlank(plank.start, plank.end)
  )

  const handleClick = () => {
    dispatch({type: SET_USING_KEYBOARD, payload: false})
    if (!!plank.start && !!plank.end && ableToPickUp) {
      puzzle.pickUpPlank(plank.start, plank.end)
    }
  }

  return(
    <Popover
      enabled={!!isTutorialPromptOpen}
      visible={!!isTutorialPromptOpen}
      content={
        <>
          <TutorialText>{'Click a plank to pick it up!'}</TutorialText>
          <TutorialSubtext>{'Or, using the keyboard, pick up a plank by facing it and pressing space bar.'}</TutorialSubtext>
          <TutorialSubtext>{'You can pick up any plank you\'re connected to.'}</TutorialSubtext>
          <TutorialSubtext>{'You can only carry one plank at a time.'}</TutorialSubtext>
        </>
      }
    >
      <PlankElement
        onClick={handleClick}
        rotation={rotation}
        length={plank.length}
        ableToPickUp={ableToPickUp}
        isTutorialPromptOpen={isTutorialPromptOpen}
      />
    </Popover>
  )
}

export default Plank

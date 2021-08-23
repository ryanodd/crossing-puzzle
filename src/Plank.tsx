import styled, { css } from 'styled-components'
import { Plank as PlankModel } from './Game/game'
import { coordsEq } from './Game/utils'
import Popover from './Popover'
import { useTypedSelector } from './types'

const PlankElement = styled.button<{
  rotation: number,
  length: number,
  ableToPickUp: boolean,
  isTutorialPromptOpen: boolean
}>`
  width: calc(${props => props.length} * 500px);
  height: 200px;
  background: linear-gradient(to top right, #ce954f, #F0B060);
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
    @keyframes example {
      0%   {filter: brightness(2.2);}
      100% {filter: brightness(1);}
    }
    animation-name: example;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  `)}
`

const TutorialText = styled.h2`
  margin: 0;
`

interface PlankProps {
  plank: PlankModel
}

const Plank = ({plank}: PlankProps) => {
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)
  

  const isVertical = (plank?.start?.x === plank?.end?.x)
  const rotation = isVertical ? 90 : 0

  const isTutorialPromptOpen: boolean = (
    game.currentPuzzleIndex === 0 && !!plank.start && !!plank.end &&
    !!(coordsEq(plank.start, puzzle.start)) &&
    !!(coordsEq(plank.end, puzzle.playerPosition))
  )

  const ableToPickUp = (
    !!plank.start && !!plank.end &&
    puzzle.canPickUpPlank(plank.start, plank.end)
  )

  const handleClick = () => {
    if (!!plank.start && !!plank.end && ableToPickUp) {
      puzzle.pickUpPlank(plank.start, plank.end)
    }
  }

  return(
    <Popover
      enabled={isTutorialPromptOpen}
      visible={!!isTutorialPromptOpen}
      content={
        <TutorialText>{'Click a plank to pick it up!'}</TutorialText>
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

import styled, { css } from 'styled-components'
import { Coordinate } from './Game/types'
import { coordsEq, includesCoord } from './Game/utils'
import Popover from './Popover'
import { useTypedSelector } from './types'

const StumpElement = styled.button<{
  isPlayerPosition: boolean,
  isDestination: boolean,
  isWalkable: boolean,
  isTutorialPromptOpen: boolean,
}>`
  width: 240px;
  height: 240px;
  background: ${props => (props.isPlayerPosition ? 
    'linear-gradient(to top right, #03c723, #0acf2b)' :
    'linear-gradient(to top right, #532e18, #663b22)'
  )};

  // Checkered flag effect
  ${props => props.isDestination && css`
    background-color: #ffffff;
    background-image: 
    linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000),
    linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000);
    background-size: 120px 120px;
    background-position: 0 0, 60px 60px;
  `}

  border-radius: 30px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35);
  position: absolute;
  z-index: 3;

  border: none;

  ${props => (props.isWalkable && !props.isPlayerPosition && css`
    :hover {
      filter: brightness(1.14);
      cursor: pointer;
    }
  `)}
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

interface StumpProps {
  coordinate: Coordinate
}

const Stump = ({
  coordinate
}: StumpProps) => {
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)

  const isPlayerPosition: boolean = coordsEq(puzzle.playerPosition, coordinate)
  const isDestination: boolean = coordsEq(puzzle.destination, coordinate)
  const isWalkable: boolean = includesCoord(puzzle.walkableStumps(), coordinate)

  const isTutorialPromptOpen: boolean = (
    game.currentPuzzleIndex === 0 &&
    coordsEq(puzzle.playerPosition, puzzle.start) &&
    !!puzzle.plankByCoords(puzzle.start, coordinate)
  )

  const handleClick = () => {
    if (isWalkable) {
      puzzle.moveTo(coordinate)
    }
  }


  return(
    <Popover
      enabled={!!isTutorialPromptOpen}
      visible={!!isTutorialPromptOpen}
      content={
        <TutorialText>{'Click a node to move!'}</TutorialText>
      }    
    >
      <StumpElement
        onClick={handleClick}
        isPlayerPosition={isPlayerPosition}
        isDestination={isDestination}
        isWalkable={isWalkable}
        isTutorialPromptOpen={isTutorialPromptOpen}
        disabled={!isWalkable}
      />
    </Popover>
  )
}

export default Stump

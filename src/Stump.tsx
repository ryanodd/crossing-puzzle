import styled, { css } from 'styled-components'
import { SET_USING_KEYBOARD } from './actions'
import { Coordinate, Direction } from './Game/types'
import { coordsEq, includesCoord } from './Game/utils'
import Popover from './Popover'
import { useTypedDispatch, useTypedSelector } from './types'

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
  //overflow: hidden;

  ${props => (props.isWalkable && !props.isPlayerPosition && css`
    :hover {
      filter: brightness(1.14);
      cursor: pointer;
    }
  `)}
  ${props => (props.isTutorialPromptOpen && css`
    @keyframes stumpTutorialBlink {
      0%   {filter: brightness(2.2);}
      100% {filter: brightness(1);}
    }
    animation-name: stumpTutorialBlink;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  `)}
`

const PlayerDirectionGlow = styled.div<{ playerDirection: number }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  border-radius: 30px;
  background: radial-gradient(160% 100% at top, #9fff45 15%, transparent 45%);
  transform: rotate(${props => props.playerDirection}deg);
  // transform-origin: center 0px;
` 

const PlayerDirectionArrow = styled.div`
  position: absolute;
  top: -30px;

  // center horizontally
  left: 0; 
  right: 0;
  margin-left: auto; 
  margin-right: auto;

  // Arrow effect
  width: 0; 
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 60px solid #ff1e1e;

  //box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35);
`

const TutorialText = styled.h2`
  margin: 0;
  text-align: center;
`

const TutorialSubtext = styled.h4`
  margin: 0;
  text-align: center;
`

interface StumpProps {
  coordinate: Coordinate
}

const Stump = ({
  coordinate
}: StumpProps) => {
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)
  const usingKeyboard = useTypedSelector(state => state.usingKeyboard)
  const dispatch = useTypedDispatch()

  const isPlayerPosition: boolean = coordsEq(puzzle.playerPosition, coordinate)
  const playerDirection: number | null = usingKeyboard
    ? puzzle.playerDirection === Direction.NORTH ? 0
      : puzzle.playerDirection === Direction.EAST ? 90
      : puzzle.playerDirection === Direction.SOUTH ? 180
      : 270
    : null
  const isDestination: boolean = coordsEq(puzzle.destination, coordinate)
  const isWalkable: boolean = includesCoord(puzzle.walkableStumps(), coordinate)

  const isTutorialPromptOpen: boolean = (
    game.currentPuzzleIndex === 0 &&
    (
      (
        coordsEq(puzzle.playerPosition, puzzle.start) &&
        !!puzzle.plankByCoords(puzzle.start, coordinate)
      ) ||
      (
        coordsEq({x: 5, y: 0}, coordinate) &&
        isWalkable &&
        coordsEq(puzzle.playerPosition, {x: 2, y: 0})
      ) ||
      (
        coordsEq({x: 7, y: 0}, coordinate) &&
        !isPlayerPosition && isWalkable
      )
      
    )
    
  )

  const handleClick = () => {
    dispatch({type: SET_USING_KEYBOARD, payload: false})
    if (isWalkable) {
      puzzle.moveTo(coordinate)
    }
  }


  return(
    <>
      <Popover
        enabled={!!isTutorialPromptOpen}
        visible={!!isTutorialPromptOpen}
        content={
          <>
            <TutorialText>{'Click a square to move!'}</TutorialText>
            <TutorialSubtext>{'Or, using the keyboard, move with the arrow keys.'}</TutorialSubtext>
            <TutorialSubtext>{'You can move to any square you\'re connected to.'}</TutorialSubtext>
          </>
        }
      >
        <StumpElement
          onClick={handleClick}
          isPlayerPosition={isPlayerPosition}
          isDestination={isDestination}
          isWalkable={isWalkable}
          isTutorialPromptOpen={isTutorialPromptOpen}
          disabled={!isWalkable}
        >
          {
            isPlayerPosition && playerDirection !== null && (
              <PlayerDirectionGlow
                playerDirection={playerDirection}
              >
                <PlayerDirectionArrow />
              </PlayerDirectionGlow>
            )
          }
        </StumpElement>
      </Popover>
    </>
  )
}

export default Stump

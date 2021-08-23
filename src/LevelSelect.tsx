import styled from 'styled-components'
import { puzzleList } from './Game/puzzleList'
import { useTypedSelector } from './types'

const LevelSelect = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  overflow-x: auto;
  > :not(:last-child) {
    margin-right: 10px;
  }
  flex-shrink: 0;
`

const LevelButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;

  border: none;
  cursor: pointer;

  flex-shrink: 0;

  background: linear-gradient(to top right, #d8da64, #f6f871);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
  border-radius: 5px;

  font-size: 1.4rem;

  :hover {
    filter: brightness(1.05);
  }
`

const PlankPlacementSpot = () => {
  const { game } = useTypedSelector(state => state)
  const puzzles = puzzleList

  const onPuzzleSelect = (index: number) => {
    game.setPuzzle(index)
  }

  return(
    <LevelSelect>
    {
      puzzles.map((puzzle, i) => 
        <LevelButton
          onClick={() => onPuzzleSelect(i)}
        >
          {i+1}
        </LevelButton>
      )
    }
    </LevelSelect>
  )
}

export default PlankPlacementSpot

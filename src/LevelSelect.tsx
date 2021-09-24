import styled from 'styled-components'
import { SET_LEVEL_SELECT_OPEN } from './actions'
import { Button } from './Button'
import { puzzleList } from './Game/puzzleList'
import { useTypedDispatch, useTypedSelector } from './types'

const LevelSelect = styled.div`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
`

const LevelButton = styled(Button)`
  width: 40px;
  height: 40px;

  font-size: 1.4rem;
  //background: linear-gradient(to top right, #41b1d3, #50c6eb);
`

const PlankPlacementSpot = () => {
  const { game } = useTypedSelector(state => state)
  const dispatch = useTypedDispatch()
  const puzzles = puzzleList

  const onPuzzleSelect = (index: number) => {
    dispatch({type: SET_LEVEL_SELECT_OPEN, payload: false})
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

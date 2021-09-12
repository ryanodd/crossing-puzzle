import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SET_USING_KEYBOARD } from '../actions'
import { Direction } from '../Game/types'
import { useTypedSelector } from '../types'
import useKeypressState from './useKeypressState'


const usePuzzleKeyboardListener = () => {
  const dispatch = useDispatch()
  const { game, usingKeyboard } = useTypedSelector(state => state)
  const key = useKeypressState()
  const puzzle = game.puzzle

  const handleDirectionPress = useCallback((direction: Direction) => {
    if (usingKeyboard) {
      if (direction === puzzle.playerDirection) {
        const closestStumpInDirection = puzzle.closestStumpInDirection(puzzle.playerPosition, direction)
        if (
          closestStumpInDirection &&
          puzzle.plankByCoords(puzzle.playerPosition, closestStumpInDirection)
        ) {
          puzzle.moveTo(closestStumpInDirection)
        }
      }
      else {
        puzzle.setPlayerDirection(direction)
      }
    } else {
      dispatch({type: SET_USING_KEYBOARD, payload: true})
    }

  }, [usingKeyboard, puzzle])

  const handleSpacePress = useCallback(() => {
    const direction: Direction = puzzle.playerDirection
    const closestStumpInDirection = puzzle.closestStumpInDirection(puzzle.playerPosition, direction)
    if (usingKeyboard) {
      if (closestStumpInDirection) {
        // If holding plank, attempt to place
        if (puzzle.currentlyCarriedPlank()){
          puzzle.putDownPlank(puzzle.playerPosition, closestStumpInDirection)
        }
        // If not holding plank, attempt to pick up
        else {
          if (puzzle.plankByCoords(puzzle.playerPosition, closestStumpInDirection)) {
            puzzle.pickUpPlank(puzzle.playerPosition, closestStumpInDirection)
          }
        }
      }
    } else {
      dispatch({type: SET_USING_KEYBOARD, payload: true})
    }
  }, [usingKeyboard, puzzle])

  useEffect(() => {
    if (key !== null){
      if (key === 'ArrowUp'){
        handleDirectionPress(Direction.NORTH)
      }
      if (key === 'ArrowDown'){
        handleDirectionPress(Direction.SOUTH)
      }
      if (key === 'ArrowLeft'){
        handleDirectionPress(Direction.WEST)
      }
      if (key === 'ArrowRight'){
        handleDirectionPress(Direction.EAST)
      }
      // Space
      if (key === ' '){
        handleSpacePress()
      }
    }
  }, [key])
}

export default usePuzzleKeyboardListener

import { useEffect } from "react";
import styled from "styled-components";
import { SET_GAME_PROGRESS } from "./actions";
import AnimationLayer from "./AnimationLayer";
import { puzzleList } from "./Game/puzzleList";
import Grid from "./Grid";
import HeaderBar from "./HeaderBar";
import { useForceUpdate } from "./hooks/useForceUpdate";
import usePuzzleKeyboardListener from "./hooks/usePuzzleKeyboardListener";
import LetterboxFitContainer from "./LetterboxFitContainer";
import { useTypedDispatch, useTypedSelector } from "./types";

const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
`

const GameGridWrapper = styled.div`
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-height: 100%;
  overflow: hidden;
  padding: 0 40px 10px;
  overflow: hidden;
`

const GameView = () => {
  const forceUpdate = useForceUpdate()
  const dispatch = useTypedDispatch()
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)
  usePuzzleKeyboardListener()

  // init behaviour
  useEffect(() => {
    game.setCallback(forceUpdate)
  }, [dispatch, forceUpdate, game])

  useEffect(() => {
    if (puzzle.isComplete) {
      setTimeout(() => {
        dispatch({type: SET_GAME_PROGRESS, payload: puzzle.id})
        const nextPuzzleIndex: number =
          game.currentPuzzleIndex < puzzleList.length - 1 ? game.currentPuzzleIndex + 1 : 0
        game.setPuzzle(nextPuzzleIndex)
      }, 2400)
    }
  }, [puzzle.isComplete])

  return (
    <GameViewContainer>
      <HeaderBar />
      <GameGridWrapper>
        <LetterboxFitContainer>
          <Grid />
        </LetterboxFitContainer>
      </GameGridWrapper>
      <AnimationLayer />
    </GameViewContainer>
  );
}

export default GameView;

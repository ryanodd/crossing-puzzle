import { useEffect } from "react";
import styled from "styled-components";
import Grid from "./Grid";
import { useForceUpdate } from "./hooks/useForceUpdate";
import LetterboxFitContainer from "./LetterboxFitContainer";
import { useTypedDispatch, useTypedSelector } from "./types";

const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  padding: 10px 40px;
  box-sizing: border-box;
`

const PuzzleTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 500;
`

const GameGridWrapper = styled.div`
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-height: 100%;
  overflow: hidden;
`

const GameView = () => {
  const forceUpdate = useForceUpdate()
  const dispatch = useTypedDispatch()
  const { game } = useTypedSelector(state => state)

  // init behaviour
  useEffect(() => {
    game.setCallback(forceUpdate)
  }, [dispatch, forceUpdate, game])
  return (
    <GameViewContainer>
      <PuzzleTitle>{game.puzzle.title}</PuzzleTitle>
      <GameGridWrapper>
        <LetterboxFitContainer>
          <Grid />
        </LetterboxFitContainer>
      </GameGridWrapper>
    </GameViewContainer>
  );
}

export default GameView;

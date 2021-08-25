import { useEffect } from "react";
import styled from "styled-components";
import Grid from "./Grid";
import HeaderBar from "./HeaderBar";
import { useForceUpdate } from "./hooks/useForceUpdate";
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
  const { game } = useTypedSelector(state => state)

  // init behaviour
  useEffect(() => {
    game.setCallback(forceUpdate)
  }, [dispatch, forceUpdate, game])
  return (
    <GameViewContainer>
      <HeaderBar />
      <GameGridWrapper>
        <LetterboxFitContainer>
          <Grid />
        </LetterboxFitContainer>
      </GameGridWrapper>
    </GameViewContainer>
  );
}

export default GameView;

import { useEffect } from "react";
import { Puzzle } from "./Game/game";
import { puzzleList } from "./Game/puzzleList";
import Grid from "./Grid";
import { useForceUpdate } from "./hooks/useForceUpdate";
import { useTypedDispatch, useTypedSelector } from "./types";

const GameView = () => {
  const forceUpdate = useForceUpdate()
  const dispatch = useTypedDispatch()
  const { game } = useTypedSelector(state => state)

  // init behaviour
  useEffect(() => {
    game.setCallback(forceUpdate)
    game.setPuzzle(new Puzzle(puzzleList[0]))
  }, [dispatch, forceUpdate, game])
  return (
    <Grid />
  );
}

export default GameView;

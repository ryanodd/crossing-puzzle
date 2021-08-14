import { useEffect } from "react";
import { Puzzle } from "./Game/game";
import { useForceUpdate } from "./hooks/useForceUpdate";
import { useTypedDispatch, useTypedSelector } from "./types";

const GameView = () => {
  const forceUpdate = useForceUpdate()
  const dispatch = useTypedDispatch()
  const { game } = useTypedSelector(state => state)

  // init behaviour
  useEffect(() => {
    game?.setCallback(forceUpdate)
    game?.setPuzzle(new Puzzle({
      width: 5,
      height: 5,
      stumps: [
        [0, 0],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 3],
        [5, 5]
      ],
      start: [0, 0],
      destination: [5, 5],
      planks: [
        {
          length: 1,
          start: [0, 0],
          end: [1, 0]
        }
      ]
    }))
  }, [dispatch, forceUpdate, game])
  console.log(game?.puzzle)
  return (
    <div>

    </div>
  );
}

export default GameView;

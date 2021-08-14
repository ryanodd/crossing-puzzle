import { useEffect } from "react";
import { useRef } from "react";
import { Game, Puzzle } from "./Game/game";
import { useForceUpdate } from "./hooks/useForceUpdate";

let globalGame = new Game()

const App = () => {
  const forceUpdate = useForceUpdate()
  const gameRef = useRef<Game>(globalGame)

  // init behaviour
  useEffect(() => {
    gameRef.current.setCallback(forceUpdate)
    gameRef.current.setPuzzle(new Puzzle({
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
  }, [forceUpdate])
  console.log(gameRef.current.puzzle)
  return (
    <div className="App">

    </div>
  );
}

export default App;

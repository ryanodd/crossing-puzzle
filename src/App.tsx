import { useState } from "react";
import { Game, Puzzle } from "./Game/game";

let initialTestGame = new Game(new Puzzle({
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

const App = () => {
  const [game, updateGame] = useState<Game|null>(initialTestGame)
  console.log(game)
  return (
    <div className="App">

    </div>
  );
}

export default App;

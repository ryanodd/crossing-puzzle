
import { SET_ERROR, Action, SET_GAME} from './actions'
import { Game } from './Game/game'

export type AppState = {
  game: Game
  error: string | null
}

const initialState: AppState = {
  game: new Game(),
  error: null,
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case SET_ERROR: {
      return { ...state, error: action.payload }
    }
    case SET_GAME: {
      return { ...state, game: action.payload }
    }
    default:
      return state
  }
}

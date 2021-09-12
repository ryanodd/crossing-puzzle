
import { SET_ERROR, Action, SET_GAME, SET_USING_KEYBOARD} from './actions'
import { Game } from './Game/game'

export type AppState = {
  game: Game
  error: string | null
  usingKeyboard: boolean
}

const initialState: AppState = {
  game: new Game(),
  error: null,
  usingKeyboard: false,
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
    case SET_USING_KEYBOARD: {
      return { ...state, usingKeyboard: action.payload }
    }
    default:
      return state
  }
}

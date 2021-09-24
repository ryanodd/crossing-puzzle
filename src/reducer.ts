
import { SET_ERROR, Action, SET_GAME, SET_USING_KEYBOARD, SET_LEVEL_SELECT_OPEN} from './actions'
import { Game } from './Game/game'

export type AppState = {
  game: Game
  error: string | null
  usingKeyboard: boolean
  isLevelSelectOpen: boolean
}

const initialState: AppState = {
  game: new Game(),
  error: null,
  usingKeyboard: false,
  isLevelSelectOpen: false,
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
    case SET_LEVEL_SELECT_OPEN: {
      return { ...state, isLevelSelectOpen: action.payload }
    }
    default:
      return state
  }
}

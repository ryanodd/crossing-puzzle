
import { SET_ERROR, Action, SET_GAME, SET_USING_KEYBOARD, SET_LEVEL_SELECT_OPEN, SET_GAME_PROGRESS} from './actions'
import { Game } from './Game/game'
import { loadProgressFromLocalStorage, saveProgressToLocalStorage } from './Game/progress'
import { GameProgress } from './Game/types'

export type AppState = {
  game: Game
  error: string | null
  usingKeyboard: boolean
  isLevelSelectOpen: boolean
  gameProgress: GameProgress
}

const initialState: AppState = {
  game: new Game(),
  error: null,
  usingKeyboard: false,
  isLevelSelectOpen: false,
  gameProgress: loadProgressFromLocalStorage()
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
    case SET_GAME_PROGRESS: {
      const levelCompleteId = action.payload as number

      const newGameProgress = state.gameProgress
      newGameProgress.levelsComplete[levelCompleteId] = true

      saveProgressToLocalStorage(newGameProgress)
      return {
        ...state,
        gameProgress: newGameProgress
      }
    }
    default:
      return state
  }
}

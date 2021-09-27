import { GameProgress } from "./types"

const PROGRESS_KEY = 'GAME_PROGRESS'

export const saveProgressToLocalStorage = (progress: GameProgress) => {
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export const loadProgressFromLocalStorage = (): GameProgress => {
  const progressValue: string | null = window.localStorage.getItem(PROGRESS_KEY)
  if (progressValue) {
    return JSON.parse(progressValue) as GameProgress
  }
  return {
    levelsComplete: {}
  }
}

import { useCallback, useEffect, useState } from 'react'

export default function useKeypressState() {
  const [keyState, setKeyState] = useState<null | string>(null)
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    setKeyState(event.key)
  }, [])
  const onKeyUp = useCallback(() => {
    setKeyState(null)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return keyState
}

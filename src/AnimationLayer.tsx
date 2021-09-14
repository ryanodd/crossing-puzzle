import styled from 'styled-components'
import { useTypedSelector } from './types'


const FullViewportDiv = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
`

const AnimationLayer = () => {
  const game = useTypedSelector(state => state.game)
  const puzzle = useTypedSelector(state => state.game.puzzle)
  return (
    <FullViewportDiv>

    </FullViewportDiv>
  )
}

export default AnimationLayer

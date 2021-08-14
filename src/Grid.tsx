import styled from 'styled-components'
import { useTypedSelector } from './types'


const GridComponent = styled.div`
  display: flex;
  flex-direction: column;
`

const Grid = () => {
  const { game } = useTypedSelector(state => state)
  return (
    <GridComponent>
      
    </GridComponent>
  )
}

export default Grid

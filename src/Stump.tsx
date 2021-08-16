import styled from 'styled-components'

const StumpElement = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgb(204, 127, 40);
  border-radius: 3px;
  position: absolute;
  z-index: 3;
`

const Stump = () => {
  return(
    <StumpElement />
  )
}

export default Stump

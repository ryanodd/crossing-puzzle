import styled from 'styled-components'

const StumpElement = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(to top right, #773d07, #864509);
  border-radius: 3px;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.3);
  position: absolute;
  z-index: 3;
`

const Stump = () => {
  return(
    <StumpElement />
  )
}

export default Stump

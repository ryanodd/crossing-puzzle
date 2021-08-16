import styled from "styled-components";
import GameView from "./GameView";

const PageElement = styled.section`
  height: 100vh;
  background: linear-gradient(to top right, #254727, #378337);
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Page = () => {
  
  return (
    <PageElement>
      <GameView/>
    </PageElement>
  );
}

export default Page

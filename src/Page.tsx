import styled from "styled-components";
import GameView from "./GameView";
import LevelSelect from "./LevelSelect";

const PageElement = styled.div`
  height: 100vh;
  background: linear-gradient(to top right, #254727, #378337);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Page = () => {
  
  return (
    <PageElement>
      <LevelSelect />
      <GameView />
    </PageElement>
  );
}

export default Page

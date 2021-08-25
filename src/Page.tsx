import styled from "styled-components";
import GameView from "./GameView";
import LevelSelect from "./LevelSelect";

const PageElement = styled.div`
  height: 100vh;
  background: linear-gradient(to top right, #a9ddec, #bcf0ff);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Page = () => {
  
  return (
    <PageElement>
      <GameView />
    </PageElement>
  );
}

export default Page

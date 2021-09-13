import { Popover } from "antd";
import { useEffect } from "react";
import styled from "styled-components";
import { BarsOutlined } from "@ant-design/icons"
import { useForceUpdate } from "./hooks/useForceUpdate";
import LevelSelect from "./LevelSelect";
import { useTypedDispatch, useTypedSelector } from "./types";
import { Button } from "./Button";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 8px;
`

const LeftSection = styled.div`
  flex-grow: 1;
  
  position: relative;
  left: 0;

  display: flex;
  align-items: center;
`

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
`

const RightSection = styled.div`

  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const PuzzleTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
`

const LevelSelectButton = styled(Button)`
  padding: 6px 8px;
`

const HeaderBar = () => {
  const { game } = useTypedSelector(state => state)
  return (
    <Wrapper>
      <LeftSection>
      </LeftSection>
      <MiddleSection>
        <PuzzleTitle>{game.puzzle.title}</PuzzleTitle>
      </MiddleSection>
      <RightSection>
        <Popover
          trigger={'click'}
          placement={'bottomRight'}
          content={
            <LevelSelect />
          }
        >
          <LevelSelectButton>
            <BarsOutlined style={{ fontSize: '2.5rem' }} />
          </LevelSelectButton>
        </Popover>
      </RightSection>
    </Wrapper>
  );
}

export default HeaderBar;


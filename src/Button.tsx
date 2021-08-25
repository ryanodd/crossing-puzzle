import styled from "styled-components";


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;

  flex-shrink: 0;

  background: linear-gradient(to top right, #179ae6, #26a9f5);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.4);
  border-radius: 5px;

  font-size: 1.2rem;

  :hover {
    filter: brightness(1.1);
  }
`

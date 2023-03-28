import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/background/StartBG.jpg");
  background-size: 100vw 100vh;
  display: flex;
  align-items: flex-end;
`;

export const startBtn = styled.button`
  width: 30vw;
  height: 20vh;
  background: url("/images/utils/startBtn.png");
  background-size: 30vw 20vh;
  transition-timing-function: ease-out;
  transition-duration: 0.05s;
  border: none;
  opacity: 0.5;
  margin: 2.5%;

  :hover {
    transition-timing-function: ease-out;
    transition-duration: 0.01s;
    transform: scale(1.2);
    opacity: 1;
  }
`;

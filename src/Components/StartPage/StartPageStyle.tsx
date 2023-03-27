import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/background/StartBG.jpg");
  background-size: 100vw 100vh;
  display: flex;
  padding: 5%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const startBtn = styled.button`
  width: 30vw;
  height: 20vh;
  background: url("/images/utils/startBtn.png");
  background-size: 30vw 20vh;
  background-color: white;
  transition-timing-function: ease-out;
  transition-duration: 0.05s;
  border: none;

  :hover {
    transition-timing-function: ease-out;
    transition-duration: 0.01s;
    transform: scale(1.2);
  }
`;

export const settingBtn = styled.button`
  width: 30vw;
  height: 20vw;
  background: url("/images/utils/settingBtn.png");
  background-size: 35vw 10vw;
  background-position: center;
  background-color: white;
  transition-timing-function: ease-out;
  transition-duration: 0.05s;
  border: none;
  background-repeat: no-repeat;

  :hover {
    transition-timing-function: ease-out;
    transition-duration: 0.01s;
    transform: scale(1.2);
  }
`;

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const infoArea = styled.div`
  display: flex;
  width: 80vw;
  height: 10vh;
  background-color: aliceblue;
`;

export const gameArea = styled.div`
  display: flex;
  width: 80vw;
  height: 70vh;
  position: relative;
`;

const playerDefault = keyframes`
  0% {
    background: url("/images/player/C1.png");
    background-size: 7.5vw 20vh;
  background-position: center;
  }
  33% {
    background: url("/images/player/C2.png");
    background-size: 7.5vw 20vh;
  background-position: center;
  }
  66% {
    background: url("/images/player/C3.png");
    background-size: 7.5vw 20vh;
  background-position: center;
  }
  100% {
    background: url("/images/player/C1.png");
    background-size: 7.5vw 20vh;
  background-position: center;
  }
`;

export const player = styled.div`
  width: 7.5vw;
  height: 20vh;
  position: absolute;
  bottom: 10%;
  left: 10%;
  background: url("images/player/C1.png");
  background-size: 7.5vw 20vh;
  background-position: center;
  animation: ${playerDefault} 0.35s infinite;
`;

export const playerClick = styled.div`
  width: 7.5vw;
  height: 20vh;
  position: absolute;
  bottom: 10%;
  left: 10%;
  background: url("images/player/C4.png");
  background-size: 7.5vw 20vh;
  background-position: center;
  opacity: 0;
`;

export const attLine = styled.div`
  position: absolute;
  width: 55.5vw;
  height: 1px;
  top: 79.4%;
  right: 11vw;
  background-color: blue;
`;

const attDefault = (jpLevel: number) => keyframes`
  0% {
  background: url("/images/JP/"+${jpLevel}+"_1.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  33% {
  background: url("/images/JP/"+${jpLevel}+"_2.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  66% {
  background: url("/images/JP/"+${jpLevel}+"_3.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  100% {
  background: url("/images/JP/"+${jpLevel}+"_1.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  }
`;

export const attObject = styled.div<{ jpLevel: number }>`
  position: absolute;
  width: 3.5vw;
  height: 5vh;
  top: -2.5vh;
  background: url("/images/JP/1_1.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  animation: ${(props) => attDefault(props.jpLevel)} 0.35s infinite;
`;

export const skillArea = styled.div`
  display: flex;
  width: 80vw;
  height: 20vh;
  background-color: white;
`;

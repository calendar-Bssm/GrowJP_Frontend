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
`;

export const moneyDiv = styled.div`
  width: 15vw;
  height: 10vh;
  background: url("/images/utils/money.png");
  background-position: center;
  background-size: 15vw 10vh;
  padding-left: 7vw;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  font-family: "Gaegu";
  font-size: 24px;
  color: black;
`;

export const gameArea = styled.div`
  display: flex;
  width: 80vw;
  height: 65vh;
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
  animation: ${playerDefault} 0.3s infinite;
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
`;

const attDefault = (jpLevel: number) => keyframes`
  0% {
  background: url(/images/JP/${jpLevel}_1.png);
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  33% {
  background: url(/images/JP/${jpLevel}_2.png);
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  66% {
  background: url(/images/JP/${jpLevel}_3.png);
  background-size: 3.5vw 5vh;
  background-position: center;
  }

  100% {
  background: url(/images/JP/${jpLevel}_1.png);
  background-size: 3.5vw 5vh;
  background-position: center;
  }
`;

const treeDefault = keyframes`
  0% {
    width: 10vw;
    height: 30vw;
    background-size: 10vw 30vh;
  }

  50% {
    width: 10vw;
    height: 31vw;
    background-size: 10vw 31vh;
  }

  100% {
    width: 10vw;
    height: 30vw;
    background-size: 10vw 30vh;
  }
`;

export const tree = styled.div<{ background: number }>`
  width: 10vw;
  height: 30vw;
  background: url(/images/tree/${(props) => props.background}_1.png);
  background-size: 10vw 30vh;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -3vw;
  right: 4%;
  animation: ${treeDefault} 1s infinite ease-in-out;
`;

const attAnimation = (attObjTop: number) => keyframes`
  0% {
    left: 0%;
    opacity: 1;
    top: ${attObjTop - 3}vh;
  }

  /* 50% {
    left: 35%;
    top: ${attObjTop}%;
  } */

  30% {
    left: 20%;
    top: ${attObjTop * Math.floor(Math.random() * 6) - 5}vh;
    transform: rotate(15deg);
  }

  62% {
    transform: rotate(0deg);
    left: 100%;
    top: ${(attObjTop + 8) * -1}vh;
  }
  93% {
    background:  url(/images/JP/boom.png);
    background-size: 7vw 10vh;
    background-position: center;
    top: ${(attObjTop + 8) * -1}vh;
    left: 100%;
  }
  100% {
    opacity: 0;
  }
`;

export const attObject = styled.div<{ jpLevel: number; attObjTop: number }>`
  position: absolute;
  width: 3.5vw;
  height: 5vh;
  top: 10.5vh;
  background: url("/images/JP/1_1.png");
  background-size: 3.5vw 5vh;
  background-position: center;
  animation: ${(props) => attDefault(props.jpLevel)} 0.35s infinite,
    ${(props) => attAnimation(props.attObjTop)} 1.5s forwards ease-in;
  z-index: 1;
`;

export const skillArea = styled.div`
  display: flex;
  width: 80vw;
  height: 25vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-start;
  gap: 5vw;
`;

export const toggleBtn = styled.button<{ background: string; display: string }>`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  background: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  opacity: 0.5;
  border: 0;
  z-index: 2;
  display: ${(props) => props.display};

  :hover {
    transition-timing-function: ease-out;
    transition-duration: 0.025s;
    transform: scale(1.2);
    opacity: 1;
    cursor: pointer;
  }
`;

export const achieveBtn = styled.button<{ background: boolean }>`
  width: 10vw;
  height: 10vw;
  background: url(${(props) => props.background ? "/images/utils/Achieve_2.png" : "/images/utils/Achieve_1.png"});
  background-position: center;
  background-size: 10vw 10vw;
  border: 4px solid gray;
  border-radius: 7.5%;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  opacity: 0.5;

  :hover {
    transition-timing-function: ease-out;
    transition-duration: 0.025s;
    transform: scale(1.1);
    opacity: 1;
    cursor: pointer;
  }

  :active {
    opacity: 0.7;
  }
`;

export const achievePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(255, 255, 255, 0.75);
  z-index: 3;
`;

export const backBtn = styled.button`
  position: absolute;
`;

export const upgradeBtn = styled(achieveBtn)`
  background: url(${(props) => props.background ? "./images/utils/Upgrade_2.png" : "./images/utils/Upgrade_1.png"});
  background-position: center;
  background-size: 10vw 10vw;
`;

export const upgradePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: absolute;
  top: 0%;
  left: 0%;
  background: rgba(255, 255, 255, 0.75);
  z-index: 3;`;

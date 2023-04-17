import styled from "styled-components";

export const setContainer = styled.div`
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
  z-index: 1;
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

export const settingBtn = styled.button<{
  background: string;
  display: string;
}>`
  width: 25vw;
  height: 25vw;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

  :active {
    opacity: 0.7;
  }
`;

export const creditDesc = styled.div`
  position: absolute;
  width: 75%;
  height: 75%;
  top: 12.5%;
  display: none;
  align-items: center;
  flex-direction: column;
  background-color: white;
  font-family: "Gaegu";
  font-weight: 600;
  z-index: 3;
  overflow-y: scroll;
  box-shadow: 3px 3px 3px 3px 5px orange;

  background: url("/images/background/CreditBG.png");
  background-size: 75vw 75vh;
  background-position: center;
  background-repeat: no-repeat;
  ::-webkit-scrollbar {
    display: none;
  }
`;

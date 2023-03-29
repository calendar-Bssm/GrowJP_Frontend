import * as S from "./GameStyle";
import * as C from "../index";
import React, { useRef } from "react";

export const Game = () => {
  let player = useRef<HTMLDivElement | any>();
  let playerClick = useRef<HTMLDivElement | any>();

  const mouseClick = () => {
    playerClick.current.style.opacity = "1";
    player.current.style.opacity = "0";
    setTimeout(() => {
      playerClick.current.style.opacity = "0";
      player.current.style.opacity = "1";
    }, 50);
  };

  return (
    <S.Container onClick={mouseClick}>
      <C.SettingPage></C.SettingPage>
      <S.infoArea></S.infoArea>
      <S.gameArea>
        <S.player ref={player}></S.player>
        <S.playerClick ref={playerClick}></S.playerClick>
        <S.attLine>
          <S.attObject jpLevel={1}></S.attObject>
        </S.attLine>
      </S.gameArea>
      <S.skillArea></S.skillArea>
    </S.Container>
  );
};

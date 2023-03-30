import * as S from "./GameStyle";
import * as C from "../index";
import React, { useRef, useState } from "react";

export const Game = () => {
  let player = useRef<HTMLDivElement | any>();
  let playerClick = useRef<HTMLDivElement | any>();
  let createdAttObject = useRef<HTMLDivElement | any>();
  let [attObject, setAttObject] = useState<HTMLElement | any>([]);
  let [attObjPath, setAttObjPath] = useState<number>(-2.5);
  let lengthOfAtt = 0;

  function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const mouseClick = () => {
    playerClick.current.style.opacity = "1";
    player.current.style.opacity = "0";
    setTimeout(() => {
      playerClick.current.style.opacity = "0";
      player.current.style.opacity = "1";
    }, 50);

    setAttObjPath(rand(-1.5, -3.5));

    setAttObject(
      attObject.concat(
        <S.attObject
          attObjTop={attObjPath}
          jpLevel={1}
          ref={createdAttObject}
        ></S.attObject>
      )
    );
    lengthOfAtt++;
    console.log(attObject.length);
    if (attObject.length >= 100) {
      setAttObject(attObject.slice(50, 100));
    }
  };

  return (
    <S.Container onClick={mouseClick}>
      <C.SettingPage></C.SettingPage>
      <S.infoArea></S.infoArea>
      <S.gameArea>
        <S.player ref={player}></S.player>
        <S.playerClick ref={playerClick}></S.playerClick>
        <S.attLine>{attObject}</S.attLine>
      </S.gameArea>
      <S.skillArea></S.skillArea>
    </S.Container>
  );
};

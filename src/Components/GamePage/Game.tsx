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

  let [money, setMoney] = useState<number>(0);
  let [jpLevel, setJpLevel] = useState<number>(1);
  let [critLevel, setCritLevel] = useState<number>(1);
  let [isAchieveOn, setIsAchieveOn] = useState<number>(1);

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
    if (attObject.length >= 10) {
      setAttObject((attObject.length = 9));
    }
  };

  return (
    <S.Container>
      <C.SettingPage></C.SettingPage>
      <S.infoArea>
        <S.moneyDiv>{money}</S.moneyDiv>
      </S.infoArea>
      <S.gameArea onClick={mouseClick}>
        <S.player ref={player}></S.player>
        <S.playerClick ref={playerClick}></S.playerClick>
        <S.attLine>{attObject}</S.attLine>
      </S.gameArea>
      <S.skillArea>
        <S.AchieveBtn background={isAchieveOn}></S.AchieveBtn>
      </S.skillArea>
    </S.Container>
  );
};

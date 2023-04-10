import * as S from "./GameStyle";
import * as C from "../index";
import React, { useRef, useState } from "react";

export const Game = () => {
  let player = useRef<HTMLDivElement | any>();
  let playerClick = useRef<HTMLDivElement | any>();
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

    setAttObjPath(rand(2.5, -3.5));

    setAttObject(
      attObject.concat(
        <S.attObject attObjTop={attObjPath} jpLevel={jpLevel}></S.attObject>
      )
    );
    // if (attObject.length >= 100) {
    //   setAttObject(attObject.slice(0, 100));
    // }
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
        <S.achieveBtn background={isAchieveOn}></S.achieveBtn>
        <S.upgradeBtn background={1}></S.upgradeBtn>
      </S.skillArea>
    </S.Container>
  );
};

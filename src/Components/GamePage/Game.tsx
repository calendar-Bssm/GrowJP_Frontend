import * as S from "./GameStyle";
import * as C from "../index";
import React, { useRef, useState } from "react";

export const Game = () => {
  const player = useRef<HTMLDivElement>(null);
  const playerClick = useRef<HTMLDivElement>(null);
  const tree = useRef<HTMLDivElement>(null);
  let achieveContainer = useRef<HTMLDivElement | any>(null);
  let upgradeContainer = useRef<HTMLDivElement | any>(null);

  let [attObject, setAttObject] = useState<HTMLDivElement[] | any>([]);
  let [attObjPath, setAttObjPath] = useState<number>(-2.5);
  let [money, setMoney] = useState<number>(0);
  let [jpLevel, setJpLevel] = useState<number>(1);
  let [critLevel, setCritLevel] = useState<number>(1);
  let [isAchieveOn, setIsAchieveOn] = useState<boolean>(false);
  let [isUpgradeOn, setIsUpgradeOn] = useState<boolean>(false);
  let [treeLevel, setTreeLevel] = useState<number>(1);
  let closeSetting = useRef<HTMLButtonElement | any>(null);
  let closeAchieve = useRef<HTMLButtonElement | any>(null);
  let closeUpgrade = useRef<HTMLButtonElement | any>(null);

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
    setTimeout(() => {
      tree.current.style.transform = "scale(1.05)";
      tree.current.style.background = `url(/images/tree/${treeLevel}_2.png)`;
      tree.current.style.backgroundSize = "10vw 30vh";
      tree.current.style.backgroundPosition = "center";
      tree.current.style.backgroundRepeat = "no-repeat";
    }, 950);
    setTimeout(() => {
      tree.current.style.transform = "scale(1)";
      tree.current.style.background = `url(/images/tree/${treeLevel}_1.png)`;
      tree.current.style.backgroundSize = "10vw 30vh";
      tree.current.style.backgroundPosition = "center";
      tree.current.style.backgroundRepeat = "no-repeat";
    }, 1000);

    setAttObjPath(rand(2.5, -3.5));

    setAttObject(
      attObject.concat(<S.attObject attObjTop={attObjPath} jpLevel={jpLevel} />)
    );
    setAttObject(
      attObject.concat(<S.attObject attObjTop={attObjPath} jpLevel={jpLevel} />)
    );

    // if (attObject.length >= 100) {
    //   setAttObject(attObject.slice(0, 100));
    // }
    console.log(attObject.length, attObject);
  };

  return (
    <S.Container>
      <S.achievePage ref={achieveContainer}>
        <S.toggleBtn
          display={"none"}
          ref={closeAchieve}
          background={"/images/utils/xBtn.png"}
          onClick={() => {
            achieveContainer.current.style.display = "none";
            closeAchieve.current.style.display = "none";
          }}
        ></S.toggleBtn>
      </S.achievePage>
      <S.upgradePage ref={upgradeContainer}>
        <S.toggleBtn
          display={"none"}
          ref={closeUpgrade}
          background={"/images/utils/xBtn.png"}
          onClick={() => {
            upgradeContainer.current.style.display = "none";
            closeUpgrade.current.style.display = "none";
          }}
        ></S.toggleBtn>
      </S.upgradePage>
      <C.SettingPage></C.SettingPage>
      <S.infoArea>
        <S.moneyDiv>{money}</S.moneyDiv>
      </S.infoArea>
      <S.gameArea onClick={mouseClick}>
        <S.player ref={player}></S.player>
        <S.playerClick ref={playerClick}></S.playerClick>
        <S.attLine>{attObject}</S.attLine>
        <S.tree ref={tree} background={treeLevel}></S.tree>
      </S.gameArea>
      <S.skillArea>
        <S.achieveBtn
          background={isAchieveOn}
          onClick={() => {
            closeAchieve.current.style.display = "flex";
            achieveContainer.current.style.display = "flex";
          }}
        ></S.achieveBtn>
        <S.upgradeBtn
          background={isUpgradeOn}
          onClick={() => {
            closeUpgrade.current.style.display = "flex";
            upgradeContainer.current.style.display = "flex";
          }}
        ></S.upgradeBtn>
      </S.skillArea>
    </S.Container>
  );
};

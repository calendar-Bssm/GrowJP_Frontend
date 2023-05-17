import * as S from "./SettingStyle";
import React, { useRef } from "react";

export const Setting = () => {
  let showSetting = useRef<HTMLButtonElement | any>(null);
  let closeSetting = useRef<HTMLButtonElement | any>(null);
  let playSound = useRef<HTMLButtonElement | any>(null);
  let stopSound = useRef<HTMLButtonElement | any>(null);
  let container = useRef<HTMLDivElement | any>(null);
  let showCredits = useRef<HTMLButtonElement | any>(null);
  let closeCredits = useRef<HTMLButtonElement | any>(null);
  let credits = useRef<HTMLDivElement | any>(null);

  function muteSong(e: HTMLAudioElement) {
    e.muted = true;
    e.pause();
  }

  function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteSong(elem));
  }

  function playSong(e: HTMLAudioElement) {
    e.muted = false;
    e.play();
  }

  function playPage() {
    document.querySelectorAll("audio").forEach((elem) => playSong(elem));
  }

  return (
    <>
      <S.toggleBtn
        display={"flex"}
        ref={showSetting}
        background={"/images/utils/settingBtn.png"}
        onClick={() => {
          showSetting.current.style.display = "none";
          container.current.style.display = "flex";
          closeSetting.current.style.display = "flex";
        }}
      ></S.toggleBtn>
      <S.toggleBtn
        display={"none"}
        ref={closeSetting}
        background={"/images/utils/xBtn.png"}
        onClick={() => {
          showSetting.current.style.display = "flex";
          container.current.style.display = "none";
          closeSetting.current.style.display = "none";
        }}
      ></S.toggleBtn>
      <S.setContainer ref={container}>
        <S.settingBtn
          onClick={() => {
            stopSound.current.style.display = "none";
            playSound.current.style.display = "flex";
            mutePage();
          }}
          display={"flex"}
          ref={stopSound}
          background={"/images/utils/disableSound.png"}
        ></S.settingBtn>
        <S.settingBtn
          onClick={() => {
            stopSound.current.style.display = "flex";
            playSound.current.style.display = "none";
            playPage();
          }}
          display={"none"}
          ref={playSound}
          background={"/images/utils/setSound.png"}
        ></S.settingBtn>
        <S.settingBtn
          display={"flex"}
          background={"/images/utils/Credits.png"}
          ref={showCredits}
          onClick={() => {
            showCredits.current.style.display = "none";
            closeCredits.current.style.display = "flex";
            credits.current.style.display = "flex";
            closeSetting.current.style.display = "none";
          }}
        ></S.settingBtn>
        <S.settingBtn
          display={"flex"}
          background={"/images/utils/saveData.png"}
        ></S.settingBtn>
        <S.creditDesc ref={credits}>
          <S.toggleBtn
            display={"none"}
            ref={closeCredits}
            background={"/images/utils/xBtn.png"}
            onClick={() => {
              showCredits.current.style.display = "flex";
              credits.current.style.display = "none";
              closeCredits.current.style.display = "none";
              closeSetting.current.style.display = "flex";
            }}
          ></S.toggleBtn>
          <h2 style={{ fontSize: "8vw", margin: "0" }}>Credits</h2>
          <p style={{ fontSize: "4vw" }}>
            Server & DataBase : 마현우
            <br /> Design & Page : 김준경
            <br />
          </p>
        </S.creditDesc>
      </S.setContainer>
    </>
  );
};

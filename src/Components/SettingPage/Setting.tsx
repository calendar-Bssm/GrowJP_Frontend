import * as S from "./SettingStyle";
import React, { useRef } from "react";

export const Setting = () => {
  let showSetting = useRef<any>(null);
  let closeSetting = useRef<any>(null);
  let playSound = useRef<any>(null);
  let stopSound = useRef<any>(null);
  let container = useRef<any>(null);

  function muteMe(e: any) {
    e.muted = true;
    e.pause();
  }

  function mutePage() {
    document.querySelectorAll("audio").forEach((elem) => muteMe(elem));
  }

  function playMe(e: any) {
    e.muted = false;
    e.play();
  }

  function playPage() {
    document.querySelectorAll("audio").forEach((elem) => playMe(elem));
  }

  return (
    <>
      <audio
        src="/audios/backgroundAudio/BGaudio.mp3"
        id="Audio"
        loop
        autoPlay
      ></audio>
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
            console.log("음소거됨");
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
            console.log("음소거 해제됨");
          }}
          display={"none"}
          ref={playSound}
          background={"/images/utils/setSound.png"}
        ></S.settingBtn>
        <S.settingBtn
          display={"flex"}
          background={"/images/utils/saveData.png"}
        ></S.settingBtn>
      </S.setContainer>
    </>
  );
};

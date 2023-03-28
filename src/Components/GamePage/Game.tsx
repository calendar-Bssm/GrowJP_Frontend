import * as S from "./GameStyle";
import * as C from "../index";

export const Game = () => {
  return (
    <S.Container>
      <C.SettingPage></C.SettingPage>
      <S.infoArea></S.infoArea>
      <S.gameArea></S.gameArea>
      <S.ItemArea></S.ItemArea>
    </S.Container>
  );
};

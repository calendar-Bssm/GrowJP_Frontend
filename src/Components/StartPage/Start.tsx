import * as S from "./StartStyle";
import * as C from "../index";
import Link from "next/link";

export const Start = () => {
  return (
    <S.container>
      <C.SettingPage></C.SettingPage>
      <Link href={"/Game"}>
        <S.startBtn></S.startBtn>
      </Link>
    </S.container>
  );
};

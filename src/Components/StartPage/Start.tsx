import * as S from "./StartPageStyle";
import Link from "next/Link";

export const Start = () => {
  return (
    <S.container>
      <Link href={"/GamePage"}>
        <S.startBtn></S.startBtn>
      </Link>
      <Link
        href={"/SettingPage"}
        style={{ backgroundColor: "white", display: "flex" }}
      >
        <S.settingBtn></S.settingBtn>
      </Link>
    </S.container>
  );
};

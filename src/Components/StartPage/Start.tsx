import * as S from "./StartStyle";
import Link from "next/Link";
import * as C from "../index";

export const Start = () => {
  return (
    <S.container>
      <C.SettingPage></C.SettingPage>
      <Link
        href={"/GamePage"}
        style={{
          display: "flex",
          width: "30vw",
          height: "20vh",
        }}
      >
        <S.startBtn></S.startBtn>
      </Link>
    </S.container>
  );
};

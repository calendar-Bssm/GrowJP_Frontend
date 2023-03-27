import * as C from "../Components/index";
import { ServerStyleSheet } from 'styled-components'

export default function Home() {

  
  return (
    <>
      <audio src="/audios/backgroundAudio/BGaudio.mp3" loop autoPlay></audio>
      <C.StartPage></C.StartPage>
    </>
  );
}
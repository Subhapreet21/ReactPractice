import { useState, useRef } from "react";
import React from "react";
import AUDIO from "./Interstellar_Soundtrack.mp3";
import IMAGE from "./interstellar.jpg";

const RefExample2 = () => {
  const [play, setPlay] = useState(true);
  const videoRef = useRef();
  let playOrPause = () => {
    if (play === true) {
      videoRef.current.play();
      console.log(play);
      setPlay(false);
    } else {
      videoRef.current.pause();
      console.log(play);
      setPlay(true);
    }
  };
  return (
    <div>
      RefExample2
      <br></br>
      <img src={IMAGE} alt="Interstellar Poster" onClick={playOrPause} />
      <audio src={AUDIO} ref={videoRef} />
    </div>
  );
};

export default RefExample2;

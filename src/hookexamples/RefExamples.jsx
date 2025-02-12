import React, { useEffect, useRef, useState } from "react";
import VIDEO from "./4114797-uhd_3840_2160_25fps.mp4";

const RefExamples = () => {
  const [play, setPlay] = useState(true);
  const eleref = useRef();
  const videoRef = useRef();
  console.log(videoRef);
  useEffect(() => {
    eleref.current.innerText = "React Ref";
    eleref.current.style.color = "teal";
  });
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
      RefExamples
      <h1 ref={eleref}>RefExamples</h1>
      <video src={VIDEO} ref={videoRef} onClick={playOrPause} />
    </div>
  );
};

export default RefExamples;

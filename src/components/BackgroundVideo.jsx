import React from "react";
import backVideo from "../assets/fondo-engranaje.mp4"; // .mp4 en vez del .gif original: mismo fondo, ~23x más liviano (400KB vs 9.1MB) → carga más rápida.

const BackgroundVideo = () => (
  <video
    className="video-background"
    src={backVideo}
    autoPlay
    loop
    muted
    playsInline
    aria-hidden="true"
  />
);

export default BackgroundVideo;

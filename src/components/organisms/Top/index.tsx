import React from "react";
import style from "./style.module.scss";

const Top: React.FC = () => {
  return (
    <div className={style.Top}>
      <div className={style.Top__videoWrapper}>
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          src="../../../../static/video/topVideo.mov"
          className={style.Top__movie}
        />
      </div>
      <p className={style.Top__title}>LOOK BACK ON LAST YEAR</p>
    </div>
  );
};

export default Top;

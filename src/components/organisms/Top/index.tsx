import React from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";

const Top: React.FC = () => {
  return (
    <div id="Top" className={style.Top}>
      <div className={style.Top__videoWrapper}>
        <p className={style.Top__titleBox}>
          <span className={style.Top__title}>LOOKBACK ON LASTYEAR</span>
        </p>
        <div className={style.Top__videoFrame}>
          <video
            muted={true}
            autoPlay={true}
            loop={true}
            src="../../../../public/video/topVideoPattern3.mp4"
            className={style.Top__video}
          />
          <div className={style.Top__titleBoxOnImage}>
            <span className={style.Top__titleOnImage}>
              LOOKBACK ON LASTYEAR
            </span>
            <span className={style.Top__titleOnImageSubTitle}>
              + hello 2023, what i do?
            </span>
          </div>
        </div>
      </div>
      <ScrollIndicator className={style.Top__scrollIndicator} />
    </div>
  );
};

export default Top;

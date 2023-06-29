import React from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";

const Top: React.FC = () => {
  return (
    <div className={style.Top}>
      <div className={style.Top__videoWrapper}>
        <div className={style.Top__videoFrame}>
          <video
            muted={true}
            autoPlay={true}
            loop={true}
            src="../../../../public/video/topVideo.mov"
            className={style.Top__video}
          />
        </div>
      </div>
      <p className={style.Top__titleBox}>
        <span className={style.Top__title}>LOOK BACK ON LAST YEAR</span>
        <span className={style.Top__subTitle}>+ hello 2023, what i do?</span>
      </p>
      <ScrollIndicator className={style.Top__scrollIndicator} />
    </div>
  );
};

export default Top;

import React from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const About: React.FC = () => {
  return (

      <div className={style.About}>
        <FadeInContainer>
          <p className={style.About__text}>
            この場所は、自分の2022を振り返り
            <br />
            2023年は何をするか、どうなりたいか
            <br />
            一年の区切りを使って自分を知ってもらうために制作しました
          </p>
          <p className={style.About__textEnglish}>
            I designed this website for self produce with my life through last year.
            <br />
            I’ll look back 2022 and consider what I do in 2023 from here.
          </p>
        </FadeInContainer>
      </div>
  );
};

export default About;

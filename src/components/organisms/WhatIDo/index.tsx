import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../static/images/whatIDo/risograph.png",
  },
];

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const settings: Settings = {
    dots: false,
    autoplay: true,
    focusOnSelect: false,
    speed: 500,
    autoplaySpeed: 6000,
    waitForAnimate: true,
    slidesToShow: 3,
    beforeChange(currentIndex) {
      setCurrentSlideIndex(currentIndex + 1);
    },
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <div className={classNames(style.WhatIDo, className)}>
      <p className={style.WhatIDo__title}>
        <span className={style.WhatIDo__titleRow}>+ Hello</span>
        <span className={style.WhatIDo__titleRow}>2023</span>
        <span className={style.WhatIDo__titleRow}>What I do?</span>
      </p>
      <div className={style.WhatIDo__sliderWrapper}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className={style.WhatIDo__sliderContent}>
              <img src={img.src} alt="picture" />
            </div>
          ))}
        </Slider>
      </div>
      <p className={style.WhatIDo__currentSlideIndicator}>
        <span className={style.WhatIDo__progressBar} />
        <span
          className={style.WhatIDo__numbers}
        >{`0${currentSlideIndex} / 06`}</span>
      </p>
      <div className={style.WhatIDo__slideText}>
        <p className={style.WhatIDo__slideTitle}>リソグラフを作る</p>
        <p className={style.WhatIDo__slideContent}>
          この場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一
          年の区切りを使って自分を知ってもらうために制作しましたこの場所は、
          自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って
          自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうな
          りたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返
          り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの
          場所は、自分の2022を振り返り2023年は何をするか、ど
        </p>
      </div>
    </div>
  );
};

export default WhatIDo;

import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideContents } from "./data";

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
    autoplaySpeed: 8000,
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
        <p className={style.WhatIDo__slideTitle}>
          {slideContents[currentSlideIndex].title}
        </p>
        <p className={style.WhatIDo__slideContent}>
          {slideContents[currentSlideIndex].text}
        </p>
      </div>
    </div>
  );
};

export default WhatIDo;

import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideContents } from "./data";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const images = [
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
];

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const [isProgress, setIsProgress] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    autoplay: true,
    focusOnSelect: false,
    speed: 500,
    autoplaySpeed: 8000,
    waitForAnimate: true,
    slidesToShow: 3,
    beforeChange(currentIndex) {
      setIsReset(true);
      setIsProgress(false);

      // 表示するのは1から
      const currentNumber = currentIndex + 2;

      if (currentNumber < 7) {
        setCurrentSlideNumber(currentNumber);
      } else {
        setCurrentSlideNumber(
          currentNumber - 6 * Math.trunc(currentNumber / 6)
        );
      }
    },
    afterChange() {
      setIsReset(false);
      setIsProgress(true);
    },
  };

  useEffect(() => {
    setIsProgress(true);
  }, []);

  return (
    <div className={classNames(style.WhatIDo, className)}>
      <FadeInContainer>
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
          <span
            className={classNames(
              style.WhatIDo__progressBar,
              isProgress ? style["WhatIDo__progressBar--progress"] : "",
              isReset ? style["WhatIDo__progressBar--reset"] : ""
            )}
          />
          <span
            className={style.WhatIDo__numbers}
          >{`0${currentSlideNumber} / 06`}</span>
        </p>
      </FadeInContainer>
      <FadeInContainer>
        <div className={style.WhatIDo__slideText}>
          <p className={style.WhatIDo__slideTitle}>
            {slideContents[currentSlideNumber - 1].title}
          </p>
          <p className={style.WhatIDo__slideContent}>
            {slideContents[currentSlideNumber - 1].text}
          </p>
        </div>
      </FadeInContainer>
    </div>
  );
};

export default WhatIDo;

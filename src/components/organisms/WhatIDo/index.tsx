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
  const AUTO_SLIDE_INTERVAL_SECOND = 8000; // 8000msで自動スライド
  const SET_INTERVAL_SECOND = 10; // 10ms毎にプログレスバーの幅を再計算
  const PROGRESS_MAX_WIDTH = 100; // 100pxが最大幅
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1); // 枚数中のcurrent
  const [currentSlideSerialNumber, setCurrentSlideSerialNumber] = useState(1); // 通し番号中のcurrent
  const [progressBarCurrentWidth, setProgressBarCurrentWidth] = useState(0);
  const [slider, setSlider] = useState<Slider | null>(null);
  const settings: Settings = {
    initialSlide: 0,
    dots: false,
    autoplay: false,
    focusOnSelect: false,
    speed: 500,
    waitForAnimate: true,
    slidesToShow: 3,
  };

  useEffect(() => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= AUTO_SLIDE_INTERVAL_SECOND / SET_INTERVAL_SECOND) {
        setProgressBarCurrentWidth(0);
        width = 0;
        clearInterval(interval);
        setCurrentSlideSerialNumber(currentSlideSerialNumber + 1);
        if (currentSlideNumber < 6) {
          setCurrentSlideNumber(currentSlideNumber + 1);
        } else {
          setCurrentSlideNumber(
            currentSlideNumber - 5 * Math.trunc(currentSlideNumber / 6)
          );
        }
      } else {
        width++;
        setProgressBarCurrentWidth(
          width /
            (AUTO_SLIDE_INTERVAL_SECOND /
              SET_INTERVAL_SECOND /
              PROGRESS_MAX_WIDTH)
        );
      }
    }, SET_INTERVAL_SECOND);

    if (slider) {
      slider.slickGoTo(currentSlideSerialNumber - 1);
    }
  }, [currentSlideNumber]);

  return (
    <div id="WhatIDo" className={classNames(style.WhatIDo, className)}>
      <FadeInContainer>
        <p className={style.WhatIDo__title}>
          <span className={style.WhatIDo__titleRow}>+ Hello</span>
          <span className={style.WhatIDo__titleRow}>2023</span>
          <span className={style.WhatIDo__titleRow}>What I do?</span>
        </p>
        <div className={style.WhatIDo__sliderWrapper}>
          <Slider
            ref={(_slider) => {
              setSlider(_slider);
            }}
            {...settings}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className={classNames(
                  style.WhatIDo__sliderContent,
                  currentSlideNumber === index ||
                    (currentSlideNumber === 6 && index === 0)
                    ? style["WhatIDo__sliderContent--current"]
                    : ""
                )}
              >
                <img src={img.src} alt="picture" />
              </div>
            ))}
          </Slider>
        </div>
        <p className={style.WhatIDo__currentSlideIndicator}>
          <span className={style.WhatIDo__progressBars}>
            <span className={style.WhatIDo__progressBarBase} />
            <span
              className={style.WhatIDo__progressBarCurrent}
              style={{ width: `${progressBarCurrentWidth}px` }}
            />
          </span>
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

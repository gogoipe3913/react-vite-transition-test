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
    autoplaySpeed: 5000,
    pauseOnHover: true,
    waitForAnimate: true,
    slidesToShow: 3,
    afterChange(currentIndex) {
      setCurrentSlideIndex(currentIndex);
      console.log("あああ");
    },
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <div className={classNames(style.WhatIDo, className)}>
      <div className={style.WhatIDo__sliderWrapper}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className={style.WhatIDo__sliderContent}>
              <img src={img.src} alt="picture" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatIDo;

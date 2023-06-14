import React from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
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
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
  };

  return (
    <div className={classNames(style.WhatIDo, className)}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt="picture" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatIDo;

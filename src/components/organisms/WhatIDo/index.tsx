import React from "react";
import style from "./style.module.scss";

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
  return <div className={style.WhatIDo}></div>;
};

export default WhatIDo;

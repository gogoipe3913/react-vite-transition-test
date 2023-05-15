import React from "react";
import style from "./style.module.scss";
import Top from "../Top";

type MainProps = {
  isDisplayed?: boolean;
};

const Main: React.FC<MainProps> = ({ isDisplayed }) => {
  if (typeof window === undefined) {
    return null;
  }

  return (
    <div className={style.Main}>
      <Top />
    </div>
  );
};

export default Main;

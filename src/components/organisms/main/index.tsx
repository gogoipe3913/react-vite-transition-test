import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

type MainProps = {
  isDisplayed?: boolean;
};

const Main: React.FC<MainProps> = ({ isDisplayed }) => {
  if (typeof window === undefined) {
    return null;
  }

  return (
    <div className={style.Main}>
      <p>Mainのコンポーネント</p>
      <Link to="/one">Oneへ</Link>
      <br />
      <Link to="/two">Twoへ</Link>
    </div>
  );
};

export default Main;

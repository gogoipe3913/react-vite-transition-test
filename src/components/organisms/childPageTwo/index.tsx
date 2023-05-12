import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ChildPageTwo: React.FC = () => {
  if (typeof window === undefined) {
    return null;
  }

  return (
    <div className={style.ChildPageTwo}>
      <p>ChildPageTwoのコンポーネント</p>
      <Link to="/">Mainへ</Link>
      <br />
      <Link to="/one">Oneへ</Link>
    </div>
  );
};

export default ChildPageTwo;

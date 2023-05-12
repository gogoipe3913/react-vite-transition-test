import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ChildPageOne: React.FC = () => {
  if (typeof window === undefined) {
    return null;
  }

  return (
    <div className={style.ChildPageOne}>
      <p>ChildPageOneのコンポーネント</p>
      <Link to="/">Mainへ</Link>
      <br />
      <Link to="/two">Twoへ</Link>
    </div>
  );
};

export default ChildPageOne;

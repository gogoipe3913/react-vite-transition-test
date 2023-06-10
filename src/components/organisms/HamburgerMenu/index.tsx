import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type HamburgerMenuProps = {
  className?: string;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ className = "" }) => (
  <div className={classNames(style.HamburgerMenu, className)}>
    <button className={style.HamburgerMenu__button}>
      <span className={style.HamburgerMenu__line} />
      <span className={style.HamburgerMenu__line} />
      <span className={style.HamburgerMenu__line} />
    </button>
  </div>
);

export default HamburgerMenu;

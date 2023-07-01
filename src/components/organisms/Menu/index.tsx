import React, { useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type MenuProps = {
  className?: string;
};

const Menu: React.FC<MenuProps> = ({ className = "" }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classNames(style.Menu, className)}>
      <button
        className={style.Menu__humbergerButton}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <span
          className={classNames(
            style.Menu__humbergerButtonLine,
            isOpened
              ? style["Menu__humbergerButtonLine--top--rotated"]
              : style["Menu__humbergerButtonLine--top"]
          )}
        />
        <span
          className={classNames(
            style.Menu__humbergerButtonLine,
            isOpened
              ? style["Menu__humbergerButtonLine--center--disappered"]
              : style["Menu__humbergerButtonLine--center"]
          )}
        />
        <span
          className={classNames(
            style.Menu__humbergerButtonLine,
            isOpened
              ? style["Menu__humbergerButtonLine--bottom--rotated"]
              : style["Menu__humbergerButtonLine--bottom"]
          )}
        />
      </button>
      <div
        className={classNames(
          style.Menu__contents,
          isOpened ? style["Menu__contents--displayed"] : ""
        )}
      >
        {isOpened ? (
          <>
            <ul className={style.Menu__contentsList}>
              <li className={style.Menu__contentsItem}>
                <a
                  href="#Top"
                  className={style.Menu__contentsItemLink}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  Top
                </a>
              </li>
              <li className={style.Menu__contentsItem}>
                <a
                  href="#About"
                  className={style.Menu__contentsItemLink}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  About
                </a>
              </li>
              <li className={style.Menu__contentsItem}>
                <a
                  href="#LookBack"
                  className={style.Menu__contentsItemLink}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  Look Back
                </a>
              </li>
              <li className={style.Menu__contentsItem}>
                <a
                  href="#WhatIDo"
                  className={style.Menu__contentsItemLink}
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  What I Do
                </a>
              </li>
            </ul>
            <a
              href="mailto:taiki.kishiyama0913@gmail.com"
              className={style.Menu__contact}
            >
              <span className={style.Menu__contactTitle}>Contact :</span>
              <span className={style.Menu__contactMail}>
                taiki.kishiyama0913@gmail.com
              </span>
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;

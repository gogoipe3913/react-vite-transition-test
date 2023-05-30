import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";

type LookBackProps = {
  className?: string;
};

const LookBack: React.FC<LookBackProps> = ({ className = "" }) => {
  return (
    <div className={classNames(style.LookBack, className)}>
      <div className={style.LookBack__sideColumn}>
        <p className={style.LookBack__sideColumnTitle}>LOOK BACK</p>
        <ul className={style.LookBack__sortItems}>
          <li className={style.LookBack__sortItem}>
            <button className={style.LookBack__sortButton}>ALL</button>
          </li>
          <li>
            <button className={style.LookBack__sortButton}>Month</button>
          </li>
          <li>
            <button className={style.LookBack__sortButton}>Event</button>
          </li>
          <li>
            <button className={style.LookBack__sortButton}>Happening</button>
          </li>
        </ul>
      </div>
      <div className={style.LookBack__mainColumn}>
        <ul className={style.LookBack__items}>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>
                  IN KYOTO LIFE
                </span>
                <span className={style.LookBack__itemTitleMonth}>February</span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/inKyotoLife.png"
                alt=""
              />
            </button>
          </li>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>
                  BECOME DESIGN ENGINEER
                </span>
                <span className={style.LookBack__itemTitleMonth}>April</span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/becomeDesignEngineer.png"
                alt=""
              />
            </button>
          </li>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>WATOTO</span>
                <span className={style.LookBack__itemTitleMonth}>June</span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/watoto.png"
                alt=""
              />
            </button>
          </li>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>BARISTA</span>
                <span className={style.LookBack__itemTitleMonth}>
                  September
                </span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/barista.png"
                alt=""
              />
            </button>
          </li>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>
                  FIRST VISITING TO KUMAMOTO
                </span>
                <span className={style.LookBack__itemTitleMonth}>
                  September
                </span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/firstVisitingToKumamoto.png"
                alt=""
              />
            </button>
          </li>
          <li className={style.LookBack__item}>
            <button className={style.LookBack__itemButton}>
              <span className={style.LookBack__itemTitle}>
                <span className={style.LookBack__itemTitleText}>NEW LIFE</span>
                <span className={style.LookBack__itemTitleMonth}>December</span>
              </span>
              <img
                className={style.LookBack__itemImage}
                src="../../../../static/images/newLife.png"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LookBack;

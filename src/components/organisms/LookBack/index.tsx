import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";
import { lookBackItems, lookBackSortItems } from "./data";

type LookBackProps = {
  className?: string;
};

const LookBack: React.FC<LookBackProps> = ({ className = "" }) => {
  return (
    <div className={classNames(style.LookBack, className)}>
      <div className={style.LookBack__sideColumn}>
        <p className={style.LookBack__sideColumnTitle}>LOOK BACK</p>
        <ul className={style.LookBack__sortItems}>
          {lookBackSortItems.map((sortItem, index) => (
            <li key={index} className={style.LookBack__sortItem}>
              <button className={style.LookBack__sortButton}>
                {sortItem.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.LookBack__mainColumn}>
        <ul className={style.LookBack__items}>
          {lookBackItems.map((item, index) => (
            <li key={index} className={style.LookBack__item}>
              <button className={style.LookBack__itemButton}>
                <span className={style.LookBack__itemTitle}>
                  <span className={style.LookBack__itemTitleText}>
                    {item.title}
                  </span>
                  <span className={style.LookBack__itemTitleMonth}>
                    {item.month}
                  </span>
                </span>
                <img
                  className={style.LookBack__itemImage}
                  src={item.url}
                  alt={item.alt}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LookBack;

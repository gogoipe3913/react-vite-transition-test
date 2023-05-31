import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";

type IntervalTextProps = {
  className?: string;
};

const IntervalText: React.FC<IntervalTextProps> = ({ className = "" }) => {
  return (
    <div className={classNames(style.IntervalText, className)}>
      <p
        className={classNames(
          style.IntervalText__text,
          style.IntervalText__textBefore
        )}
      >
        <span className={style.IntervalText__textBeforeBody}>
          LOOK BACK ON LAST YEAR LOOK BACK ON LAST YEAR
        </span>
        <span className={style.IntervalText__textBeforeBody}>
          LOOK BACK ON LAST YEAR LOOK BACK ON LAST YEAR
        </span>
        <span className={style.IntervalText__textBeforeBody}>
          LOOK BACK ON LAST YEAR LOOK BACK ON LAST YEAR
        </span>
      </p>
      <p
        className={classNames(
          style.IntervalText__text,
          style.IntervalText__textAfter
        )}
      >
        <span className={style.IntervalText__textAfterBody}>
          WHAT I DO IN THIS YEAR WHAT I DO IN THIS YEAR
        </span>
        <span className={style.IntervalText__textAfterBody}>
          WHAT I DO IN THIS YEAR WHAT I DO IN THIS YEAR
        </span>
        <span className={style.IntervalText__textAfterBody}>
          WHAT I DO IN THIS YEAR WHAT I DO IN THIS YEAR
        </span>
      </p>
    </div>
  );
};

export default IntervalText;

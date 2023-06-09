import classNames from "classnames";
import React, { RefObject, createRef, useRef, useState } from "react";
import style from "./style.module.scss";
import { lookBackItems, lookBackSortItems } from "./data";

const ITEM_IMAGE_WIDTH_HALF = 100;
const ITEM_IMAGE_HEIGHT_HALF = 330.5;
const ITEM_IMAGE_HOVER_TRANSLATE_RATIO = 0.05;
const ITEM_IMAGE_HOVER_ROTATE_RATIO_X = -0.03;
const ITEM_IMAGE_HOVER_ROTATE_RATIO_Y = -0.06;

type LookBackProps = {
  className?: string;
};

const LookBack: React.FC<LookBackProps> = ({ className = "" }) => {
  const itemRefs = useRef<RefObject<HTMLImageElement>[]>([]);
  const pointerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  lookBackItems.forEach((_, index) => {
    itemRefs.current[index] = createRef<HTMLImageElement>();
  });

  return (
    <>
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
                    ref={itemRefs.current[index]}
                    src={item.url}
                    alt={item.alt}
                    onMouseMove={(event) => {
                      if (!isHovered) {
                        setIsHovered(true);
                      }

                      // 画像ホバー3Dエフェクト処理
                      const ref = itemRefs.current[index];
                      if (ref && ref.current) {
                        const offsetX = event.nativeEvent.offsetX;
                        const offsetY = event.nativeEvent.offsetY;
                        ref.current.style.transform = `translateX(${
                          (offsetX - ITEM_IMAGE_WIDTH_HALF) *
                          ITEM_IMAGE_HOVER_TRANSLATE_RATIO
                        }px) translateY(${
                          (offsetY - ITEM_IMAGE_HEIGHT_HALF) *
                          ITEM_IMAGE_HOVER_TRANSLATE_RATIO
                        }px) rotateX(${
                          (offsetY - ITEM_IMAGE_HEIGHT_HALF) *
                          ITEM_IMAGE_HOVER_ROTATE_RATIO_X
                        }deg) rotateY(${
                          (offsetX - ITEM_IMAGE_WIDTH_HALF) *
                          ITEM_IMAGE_HOVER_ROTATE_RATIO_Y
                        }deg)`;
                      }

                      // 背景ノイズポインタ処理
                      if (pointerRef && pointerRef.current) {
                        pointerRef.current.style.transform = `translateX(calc(${event.clientX}px - 50%)) translateY(calc(${event.clientY}px - 50%))`;
                      }
                    }}
                    onMouseLeave={() => {
                      if (isHovered) {
                        setIsHovered(false);
                      }
                      const ref = itemRefs.current[index];
                      if (ref && ref.current) {
                        ref.current.style.transform = `translateX(0px) translateY(0px)`;
                      }
                    }}
                    className={style.LookBack__itemImage}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={classNames(
          style.LookBackNoise,
          isHovered ? style["LookBackNoise--displayed"] : ""
        )}
      />
      <div className={style.LookBackBlue}>
        <div ref={pointerRef} className={style.LookBackBlue__body}>
          <div
            className={classNames(
              style.LookBackBlue__round,
              isHovered ? style["LookBackBlue__round--displayed"] : ""
            )}
          />
        </div>
      </div>
    </>
  );
};

export default LookBack;

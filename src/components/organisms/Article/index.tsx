import React from "react";
import { Link } from "react-router-dom";
import { ARTICLE_TYPE, Articles } from "./data";
import classNames from "classnames";
import style from "./style.module.scss";
import Footer from "../Footer";

type ArticleProps = {
  articleType: ARTICLE_TYPE;
  className?: string;
};

const Article: React.FC<ArticleProps> = ({ articleType, className = "" }) => {
  const item = Articles[articleType];

  return (
    <div className={classNames(style.Article, className)}>
      <div className={style.Article__topContainer}>
        <img
          width="100%"
          height="100%"
          src={item.mainImage.url}
          alt={item.mainImage.alt}
          className={style.Article__mainImage}
        />
        <p className={style.Article__scrollIndicator}>scroll</p>
      </div>
      <Link to="/" className={style.Article__linkToIndex}>
        <span className={style.Article__linkArrowAngle} />
        <span className={style.Article__linkArrow} />
        <span className={style.Article__linkText}>Back to index</span>
      </Link>
      <h1 className={style.Article__titleVertical}>
        <span className={style.Article__titleVerticalBody}>{item.title}</span>
        <span className={style.Article__titleVerticalMonth}>{item.month}</span>
      </h1>

      <div className={style.Article__contentWrapper}>
        <div className={style.Article__content}>
          <div className={style.Article__leftColumn}>
            <p className={style.Article__title}>{item.title}</p>
            <p className={style.Article__date}>{item.date}</p>
            <p className={style.Article__text}>{item.text}</p>
            <p className={style.Article__tag}>
              <span />
              <span className={style.Article__tagBody}>{item.tag}</span>
              <span />
            </p>
            <p className={style.Article__textEnglish}>{item.textEnglish}</p>
          </div>
          <ul className={style.Article__rightColumn}>
            {item.imageFigures.map((imageFigure, index) => (
              <li className={style.Article__imageFigure} key={index}>
                <img width="100%" src={imageFigure.url} alt={imageFigure.alt} />
              </li>
            ))}
          </ul>
        </div>
        <Footer className={style.Article__footer} />
      </div>
    </div>
  );
};

export default Article;

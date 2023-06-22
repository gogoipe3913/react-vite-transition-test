import mainImage1 from "../../../../public/images/articles/1/test_article_main.png";
import imageFigure1 from "../../../../public/images/articles/1/imageFigures/imageFigure_1.png";
import imageFigure2 from "../../../../public/images/articles/1/imageFigures/imageFigure2.png";
import imageFigure3 from "../../../../public/images/articles/1/imageFigures/imageFigure3.png";

export enum ARTICLE_TYPE {
  ONE = "one",
  TWO = "two",
  THREE = "three",
}

type ImageInterface = {
  url: string;
  alt: string;
};

type ArticleInterface = {
  title: string;
  month: string;
  date: string;
  mainImage: ImageInterface;
  text: string;
  textEnglish: string;
  tag: string;
  imageFigures: ImageInterface[];
};

type ArticlesInterface = {
  [key in ARTICLE_TYPE]: ArticleInterface;
};

export const Articles: ArticlesInterface = {
  [ARTICLE_TYPE.ONE]: {
    title: "IN KYOTO LIFE",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: mainImage1,
      alt: "記事1のメイン画像",
    },
    text: "この場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り20...",
    textEnglish:
      "I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.",
    tag: "NEW",
    imageFigures: [
      { url: imageFigure1, alt: "" },
      { url: imageFigure2, alt: "" },
      { url: imageFigure3, alt: "" },
    ],
  },
  [ARTICLE_TYPE.TWO]: {
    title: "IN KYOTO LIFE",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: "",
      alt: "",
    },
    text: "この場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り20...",
    textEnglish:
      "I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.",
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.THREE]: {
    title: "IN KYOTO LIFE",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: "",
      alt: "",
    },
    text: "この場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り20...",
    textEnglish:
      "I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.",
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
};

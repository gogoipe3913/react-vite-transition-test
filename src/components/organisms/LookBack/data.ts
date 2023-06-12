import { LookBackItemDataProps } from ".";

const SORT_ITEM_NAME = {
  ALL: "All",
  MONTH: "Month",
  LIFE: "LIFE",
  EVENT: "Event",
};

const lookBackSortItems = [
  {
    name: SORT_ITEM_NAME.ALL,
  },
  {
    name: SORT_ITEM_NAME.MONTH,
  },
  {
    name: SORT_ITEM_NAME.LIFE,
  },
  {
    name: SORT_ITEM_NAME.EVENT,
  },
];

const lookBackItems: LookBackItemDataProps[] = [
  {
    title: "IN KYOTO LIFE",
    month: "February",
    url: "../../../../static/images/inKyotoLife.png",
    alt: "IN KYOTO LIFEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "BECOME DESIGN ENGINEER",
    month: "April",
    url: "../../../../static/images/becomeDesignEngineer.png",
    alt: "BECOME DESIGN ENGINEERのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "WATOTO",
    month: "June",
    url: "../../../../static/images/watoto.png",
    alt: "WATOTOのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "BARISTA",
    month: "August",
    url: "../../../../static/images/barista.png",
    alt: "BARISTAのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "FIRST VISITING TO KUMAMOTO",
    month: "September",
    url: "../../../../static/images/firstVisitingToKumamoto.png",
    alt: "BECOME DESIGN ENGINEERのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "NEW LIFE",
    month: "December",
    url: "../../../../static/images/newLife.png",
    alt: "NEW LIFEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
];

export { lookBackSortItems, lookBackItems, SORT_ITEM_NAME };

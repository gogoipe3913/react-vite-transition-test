import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../organisms/MainLayout";
import Top from "../organisms/Top";
import About from "../organisms/About";
import LookBack from "../organisms/LookBack";
import IntervalText from "../organisms/IntervalText";
import Menu from "../organisms/Menu";
import WhatIDo from "../organisms/WhatIDo";
import Footer from "../organisms/Footer";
import { ARTICLE_TYPE } from "../organisms/Article/data";
import Article from "../organisms/Article";
import ScrollTop from "../atoms/ScrollTop";

const Templates: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollTop />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainLayout>
                <>
                  <Menu />
                  <Top />
                  <About />
                  <LookBack />
                  <IntervalText />
                  <WhatIDo />
                  <Footer />
                </>
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.ONE}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.ONE} />
              </MainLayout>
            }
          />
          <Route
            path={`/${ARTICLE_TYPE.TWO}`}
            element={
              <MainLayout>
                <Article articleType={ARTICLE_TYPE.TWO} />
              </MainLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Templates;

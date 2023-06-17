import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import ChildPageOne from "../organisms/childPageOne";
import ChildPageTwo from "../organisms/childPageTwo";
import MainLayout from "../organisms/MainLayout";
import Top from "../organisms/Top";
import About from "../organisms/About";
import LookBack from "../organisms/LookBack";
import IntervalText from "../organisms/IntervalText";
import HamburgerMenu from "../organisms/HamburgerMenu";
import WhatIDo from "../organisms/WhatIDo";
import Footer from "../organisms/Footer";

const Templates: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <MainLayout>
                <>
                  <HamburgerMenu />
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
            path="/one"
            element={
              <MainLayout>
                <ChildPageOne />
              </MainLayout>
            }
          />
          <Route
            path="/two"
            element={
              <MainLayout>
                <ChildPageTwo />
              </MainLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Templates;

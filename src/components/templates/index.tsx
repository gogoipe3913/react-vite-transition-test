import React from "react";
import Main from "../organisms/main";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import ChildPageOne from "../organisms/childPageOne";
import ChildPageTwo from "../organisms/childPageTwo";
import MainLayout from "../organisms/MainLayout";

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
                <Main />
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

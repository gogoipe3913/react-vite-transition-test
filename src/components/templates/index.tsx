import React from "react";
import Main from "../organisms/main";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import ChildPageOne from "../organisms/childPageOne";
import ChildPageTwo from "../organisms/childPageTwo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import style from "./style.module.scss";

const Templates: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div>外側</div>
      <TransitionGroup>
        <CSSTransition key={pathname} timeout={1000}>
          <div className={style.Templates}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/one" element={<ChildPageOne />} />
              <Route path="/two" element={<ChildPageTwo />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Templates;

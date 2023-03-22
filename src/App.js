import React from "react";
import GlobalStyle from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;

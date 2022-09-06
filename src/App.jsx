import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing Components
import Home from "./Home/Home";
import Layout from "./NavBar/Layout";
import Explore from "./Explore/Explore";
import ExploreByColor from "./Explore/ByColor/ExploreByColor";
import Curate from "./Curate/Curate";
import PlanYourVisit from "./Plan/PlanYourVisit";

const App = () => {

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/color" element={<ExploreByColor />} />
            <Route path="/curate" element={<Curate />} />
            <Route path="/plan" element={<PlanYourVisit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
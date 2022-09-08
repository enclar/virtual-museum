import React, { useState, useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import museumReducer from "./museumReducer";
import "./App.css";

// Importing Components
import Home from "./Home/Home";
import Layout from "./NavBar/Layout";
import Explore from "./Explore/Explore";
import ExploreByColor from "./Explore/ByColor/ExploreByColor";
import ExploreByDepartment from "./Explore/ByDepartment/ExploreByDepartment";
import ObjectDetails from "./ObjectDetails/ObjectDetails";
import Favs from "./Favs/Favs";
import Curate from "./Curate/Curate";
import PlanYourVisit from "./Plan/PlanYourVisit";

export const DataContext = createContext();

const App = () => {

  const [museum, dispatch] = useReducer(museumReducer, {
    selectedArtwork: {},
    exploreColors: [],
    filterByColor: [],
    exploreDepts: [],
    filterByDept: [],
    searchResults: []
  });

  return (
    <div id="app">
      <DataContext.Provider value={{museum, dispatch}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/color" element={<ExploreByColor />} />
              <Route path="/explore/dept" element={<ExploreByDepartment />} />
              <Route path="/details/:code" element={<ObjectDetails />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/curate" element={<Curate />} />
              <Route path="/plan" element={<PlanYourVisit />} />
            </Route>
          </Routes>
        </BrowserRouter>  
      </DataContext.Provider>
    </div>
  );
};

export default App;
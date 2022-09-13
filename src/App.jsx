import React, { useState, useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import museumReducer from "./museumReducer";
import "./App.css";

// Importing Components
import Home from "./Home/Home";
import Layout from "./NavBar/Layout";
import Explore from "./Explore/Explore";
import ObjectDetails from "./ObjectDetails/ObjectDetails";
import Favs from "./Favs/Favs";
import Curate from "./Curate/Curate";
import PlanYourVisit from "./Plan/PlanYourVisit";

export const DataContext = createContext();

const App = () => {

  const [museum, dispatch] = useReducer(museumReducer, {
    selectedArtwork: {},
    status: "loading",
    currExploreParam: null,
    availSwatches: [],
    availDepts: [],
    currSwatches: [],
    searchResults: [],
    favArtworks: [],
  });

  return (
    <div id="app">
      <DataContext.Provider value={{museum, dispatch}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:code" element={<ObjectDetails />} />
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
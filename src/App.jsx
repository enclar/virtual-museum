import React, { useReducer, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import urlcat from "urlcat";
import museumReducer from "./museumReducer";
import "./App.css";

// Importing Components
import Home from "./Home/Home";
import Layout from "./NavBar/Layout";
import Explore from "./Explore/Explore";
import ObjectDetails from "./ObjectDetails/ObjectDetails";
import Favs from "./Favs/Favs";
import Videos from "./Videos/Videos";
import VideoDetails from "./VideoDetails/VideoDetails";
import PlanYourVisit from "./Plan/PlanYourVisit";

export const DataContext = createContext();

const App = () => {
  // Setting up reducer
  const [museum, dispatch] = useReducer(museumReducer, {
    // Relating to a selected artwork and its details
    selectedArtwork: {},
    imageIndex: 0,
    currSwatches: [],

    // Status of loading
    status: "loading",

    // Relating to results/a group of artworks
    searchResults: [],
    favourites: [],
    videoResults: [],
    videoImages: [],

    // Relating to filters/current location/pagination
    filterOptions: {swatches: [], depts: [], periods: []},
    currentFilters: {color: "", dept: "", period: "", on_display: "false", query: ""},
    pagination: {currPage: "1", totalPages: ""},
    currLocation: ""
  });

  // Upon loading app, pre-load all the filter data
  useEffect(() => {
    const getFilterOptions = async () => {
      const colorURL = urlcat("https://api.collection.cooperhewitt.org/rest/", {
        method: "cooperhewitt.colors.palettes.getInfo",
        access_token: "4845918c6c961dd37cbb22942d5c2ec8",
        palette: "crayola"
      });

    const deptURL = urlcat("https://api.collection.cooperhewitt.org/rest/", {
      method: "cooperhewitt.departments.getList",
      access_token: "4845918c6c961dd37cbb22942d5c2ec8",
      page: "1",
      per_page: "5"
    });

    const periodURL = urlcat("https://api.collection.cooperhewitt.org/rest/", {
      method: "cooperhewitt.periods.getList",
      access_token: "4845918c6c961dd37cbb22942d5c2ec8",
      page: "1",
      per_page: "100"
    });

    try {
      const colorResponse = await fetch(colorURL);
      const colorData = await colorResponse.json();

      const deptResponse = await fetch(deptURL);
      const deptData = await deptResponse.json();

      const periodResponse = await fetch(periodURL);
      const periodData = await periodResponse.json();

      dispatch({
        type: "GET_FILTER_OPTIONS",
        value: {swatches: Object.keys(colorData.colors), depts: deptData.departments, periods: periodData.periods}
      });
    }

    catch (error) {
      console.log(error)
    }
  };

  getFilterOptions();
  }, []);

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
              <Route path="/favs/:code" element={<ObjectDetails />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/videos/:code" element={<VideoDetails />} />
              <Route path="/visit" element={<PlanYourVisit />} />
            </Route>
          </Routes>
        </BrowserRouter>  
      </DataContext.Provider>
    </div>
  );
};

export default App;
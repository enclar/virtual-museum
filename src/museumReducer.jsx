const museumReducer = (state, action) => {
    switch (action.type) {
        // ExploreByColor.jsx
        case "EXPLORE_BY_COLOR":
            return ({...state, exploreColors: action.value})
        // ExploreByColor.jsx
        case "FILTER_ART":
            return ({... state, filteredArt: action.value})
    };
};

export default museumReducer;
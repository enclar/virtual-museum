const museumReducer = (state, action) => {
    switch (action.type) {
        case "EXPLORE_BY_COLOR":
            return ({...state, exploreColors: action.value})
        case "FILTER_ART":
            return ({... state, filteredArt: action.value})
    };
};

export default museumReducer;
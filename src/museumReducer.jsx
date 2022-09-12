const museumReducer = (state, action) => {
    switch (action.type) {
        case "VIEW_DETAILS":
            return ({...state, selectedArtwork: action.value})
        case "LOADING":
            return ({...state, status: action.value})
        // ObjectDetails.jsx
        case "GET_ARTWORK_SWATCHES":
            return ({...state, currSwatches: action.value})
        // Explore.jsx
        case "EXPLORE_BY":
            return ({...state, currExploreParam: action.value})
        // ExploreByColor.jsx
        case "EXPLORE_BY_COLOR":
            return ({...state, exploreColors: action.value})
        // ExploreByColor.jsx
        case "FILTER_ART_BY_COLOR":
            return ({... state, filterByColor: action.value, searchResults: action.value})
        // ExploreByDepartment.jsx
        case "EXPLORE_BY_DEPT":
            return ({... state, exploreDepts: action.value})
        // ExploreByDepartment.jsx
        case "FILTER_ART_BY_DEPT":
            return ({...state, filterByDept: action.value, searchResults: action.value})
        // ObjectDetails.jsx
        case "ADD_TO_FAVS":
            return ({...state, favArtworks: [...state.favArtworks, action.value]})
    };
};

export default museumReducer;
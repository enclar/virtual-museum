const museumReducer = (state, action) => {
    switch (action.type) {
        //! Results.jsx & Favs.jsx
        // Called when user wants to view the details of a selected artwork - Value is all the details of a chosen artwork/video
        case "VIEW_DETAILS":
            return ({...state, selectedArtwork: action.value})
        
        // Called when the load state of the API changes - Value is loading/done/error
        case "LOADING":
            return ({...state, status: action.value})

        //! Filters.jsx
        // Called when a filter param is chosen, will then be used to search for corresponding artworks
        case "FILTER_ART":
            return ({... state, searchResults: action.value})
        
        //! ObjectDetails.jsx
        // Called when user wants to add an artwork to their favs list
        case "ADD_TO_FAVS":
            return ({...state, favArtworks: [...state.favArtworks, action.value]})
        
        //! ObjectDetails.jsx
        // Returning a list of swatches for a particular artwork
        case "GET_ARTWORK_SWATCHES":
            return ({...state, currSwatches: action.value})

        //! ObjectsDetails.jsx
        // Called when user wants to view another image
        case "SWITCH_IMAGE":
            return ({...state, imageIndex: action.value})

        //! Videos.jsx
        // Called when user clicks on the video page
        case "EXPLORE_VIDEOS":
            return ({...state, videoList: action.value})
        
        //! App.jsx
        // Called to update filter options (list of colors/dept/periods etc.)
        case "GET_FILTER_OPTIONS":
            return({...state, filterOptions: action.value})

        //! Filters.jsx & PaginationRev.jsx
        // Called to update the filter options which are currently in place/switch page
        case "UPDATE_CURRENT_FILTERS":
            return({...state, currentFilters: action.value})

        //! Explore.jsx
        // Called to update pagination information (total number of pages/current page)
        case "UPDATE_PAGINATION":
            return({...state, pagination: action.value})
    }
};

export default museumReducer;

/*
//! Explore.jsx
// Called when user chooses the params they want to explore with - Value is color/dept/video
case "EXPLORE_BY":
    return ({...state, currExploreParam: action.value})

//! ExploreByColor.jsx
// Called when component loads to pull all the available color swatches
    case "FETCH_SWATCHES":
        return ({...state, availSwatches: action.value})
        
//! ExploreByDepartment.jsx
// Called when component loads to pull all the available departments
    case "FETCH_DEPTS":
        return ({...state, availDepts: action.value})
*/
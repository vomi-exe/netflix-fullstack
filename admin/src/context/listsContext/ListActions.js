export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (list) => ({
    type: "GET_LISTS_SUCCESS",
    payload: list,
});

export const getListsFaliure = () => ({
    type: "GET_LISTS_FAILURE",
});




export const createListFaliure = () => ({
    type: "CREATE_LIST_FAILURE",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
});

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});




// export const updateMoviesFaliure = () => ({
//     type: "UPDATE_MOVIES_FAILURE",
// });

// export const updateMoviesSuccess = (movie) => ({
//     type: "UPDATE_MOVIES_SUCCESS",
//     payload: movie,
// });

// export const updateMoviesStart = () => ({
//     type: "UPDATE_MOVIES_START",
// });






export const deleteListsStart = () => ({
    type: "DELETE_LISTS_START",
});

export const deleteListsSuccess = (id) => ({
    type: "DELETE_LISTS_SUCCESS",
    payload: id,
});

export const deleteListsFaliure = () => ({
    type: "DELETE_LISTS_FAILURE",
});

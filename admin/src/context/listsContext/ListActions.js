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




// export const createMoviesFaliure = () => ({
//     type: "CREATE_MOVIES_FAILURE",
// });

// export const createMoviesSuccess = (movie) => ({
//     type: "CREATE_MOVIES_SUCCESS",
//     payload: movie,
// });

// export const createMoviesStart = () => ({
//     type: "CREATE_MOVIES_START",
// });




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

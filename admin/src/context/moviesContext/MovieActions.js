export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});

export const getMoviesFaliure = () => ({
    type: "GET_MOVIES_FAILURE",
});




export const createMoviesFaliure = () => ({
    type: "CREATE_MOVIES_FAILURE",
});

export const createMoviesSuccess = (movie) => ({
    type: "CREATE_MOVIES_SUCCESS",
    payload: movie,
});

export const createMoviesStart = () => ({
    type: "CREATE_MOVIES_START",
});




export const updateMoviesFaliure = () => ({
    type: "UPDATE_MOVIES_FAILURE",
});

export const updateMoviesSuccess = (movie) => ({
    type: "UPDATE_MOVIES_SUCCESS",
    payload: movie,
});

export const updateMoviesStart = () => ({
    type: "UPDATE_MOVIES_START",
});






export const deleteMoviesStart = () => ({
    type: "DELETE_MOVIES_START",
});

export const deleteMoviesSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,
});

export const deleteMoviesFaliure = () => ({
    type: "DELETE_MOVIES_FAILURE",
});

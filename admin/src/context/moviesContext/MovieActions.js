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

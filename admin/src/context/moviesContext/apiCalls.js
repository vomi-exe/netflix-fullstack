import axios from "axios";
import {
    getMoviesSuccess, getMoviesFaliure, getMoviesStart,
    createMoviesStart, createMoviesSuccess, createMoviesFaliure,
    updateMoviesStart, updateMoviesFaliure, updateMoviesSuccess,
    deleteMoviesSuccess, deleteMoviesStart, deleteMoviesFaliure
} from "./MovieActions";


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: " Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFaliure());
    }
};

export const createMovie = async (movie, dispatch) => {
    dispatch(createMoviesStart());
    try {
        const res = await axios.post("/movies/", movie, {
            headers: {
                token: " Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMoviesSuccess(res.data));
    } catch (err) {
        dispatch(createMoviesFaliure());
    }
};

export const updateMovie = async (id, movie, dispatch) => {
    dispatch(updateMoviesStart());
    try {
        const res = await axios.put("/movies/" + id, movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateMoviesSuccess(res.data));
    } catch (err) {
        dispatch(updateMoviesFaliure());
    }
};



export const deleteMovies = async (id, dispatch) => {
    dispatch(deleteMoviesStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: " Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMoviesSuccess(id));
    } catch (err) {
        dispatch(deleteMoviesFaliure());
    }
};
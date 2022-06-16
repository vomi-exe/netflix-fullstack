import axios from "axios";
import { getMoviesSuccess, getMoviesFaliure, getMoviesStart, deleteMoviesSuccess, deleteMoviesStart, deleteMoviesFaliure } from "./MovieActions";


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
import axios from "axios";
import {
    getListsSuccess, getListsFaliure, getListsStart,
    // createMoviesStart, createMoviesSuccess, createMoviesFaliure,
    // updateMoviesStart, updateMoviesFaliure, updateMoviesSuccess,
    deleteListsSuccess, deleteListsStart, deleteListsFaliure
} from "./ListActions";


export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFaliure());
    }
};

// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMoviesStart());
//     try {
//         const res = await axios.post("/movies/", movie, {
//             headers: {
//                 token: " Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(createMoviesSuccess(res.data));
//     } catch (err) {
//         dispatch(createMoviesFaliure());
//     }
// };

// export const updateMovie = async (id, dispatch) => {
//     dispatch(updateMoviesStart());
//     try {
//         const res = await axios.put("/movies/" + id, {
//             headers: {
//                 token: " Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(updateMoviesSuccess(res.data));
//     } catch (err) {
//         dispatch(updateMoviesFaliure());
//     }
// };



export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListsStart());
    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListsSuccess(id));
    } catch (err) {
        dispatch(deleteListsFaliure());
    }
};
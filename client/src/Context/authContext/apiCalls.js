import axios from "axios";
import { loginFaliure, loginSuccess, loginStart, logout } from "./AuthAction";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFaliure());
        console.log(err);
    }
}

export const logoutStart = async (dispatch) => {
    dispatch(logout());
}
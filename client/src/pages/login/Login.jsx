import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authContext/AuthContext";
import {login } from "../../Context/authContext/apiCalls"
import "./login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return <div className="login">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
        </div>
        <div className="container">
            <form >
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or Phone Number" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleSubmit}>Sign In</button>
                <span>New to Netflix ? <b><span>Sign up</span> now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a
                    bot. <b>Learn more</b>.
                </small>
            </form>

        </div>
    </div>;
};

export default Login;

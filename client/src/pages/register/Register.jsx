import { useState, useRef } from 'react';
import "./register.scss";
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const emailRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return <div className="register">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
                <div className="input">
                    <input type="email" placeholder="Enter your Email" ref={emailRef} />
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ) : (
                <form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button className="registerButton" onClick={handleFinish}>Start</button>
                </form>
            )}
        </div>
        <p className="lastLine">
            <Link className="link" style={{ textDecoration: 'none' }} to="/home">
                <Button className="btn-blw" variant="contained">Home</Button>
            </Link>
            <Link className="link" style={{ textDecoration: 'none' }} to="/watch">
                <Button variant="contained" className="btn-blw" color="primary">
                    Watch
                </Button>
            </Link>
            <Link className="link" style={{ textDecoration: 'none' }} to="/login">
                <Button variant="contained" className="btn-blw" color="secondary">
                    Login
                </Button>
            </Link>
        </p>


    </div>;
};

export default Register;

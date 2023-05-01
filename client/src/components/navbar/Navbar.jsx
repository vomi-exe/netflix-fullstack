import { useContext, useState } from "react";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext/AuthContext";
import {logoutStart } from "../../Context/authContext/apiCalls"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link className="link" to="/">
                    <span>Homepage</span>
                </Link>
                <Link className="link" to="/series">
                    <span>Series</span>
                </Link>
                <Link className="link" to="/movies">
                    <span>Movies</span>
                </Link>

                <span>New and Popular</span>

                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon" />
                <span>KID</span>
                <Notifications className="icon" />
                <img
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => logoutStart(dispatch)}>Logout</span>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default Navbar;

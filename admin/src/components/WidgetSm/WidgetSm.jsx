import React, { useState, useEffect, useContext } from 'react';
import "./widgetSm.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutStart } from '../../context/authContext/apiCalls';


const WidgetSm = () => {

    const [newUser, setNewUser] = useState([]);
    const { user } = useContext(AuthContext);
    const { dispatch } = useContext(AuthContext);
    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("users?new=true", {
                    headers: {
                        token: "Bearer " + user.accessToken
                    },
                });
                setNewUser(res.data);
            } catch (e) {
                console.log(e);
                logoutStart(dispatch);
            }
        }
        getNewUsers();
    }, [user.accessToken , dispatch]);


    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Members</span>
            <ul className="widgetSmList">
                {
                    newUser.map((user) => (
                        <li className="widgetSmListItem">
                            <div className="widgetSmItemInfo">
                                <img className="widgetSmImg"
                                    src={user.profilePic ? user.profilePic : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                                    alt="Profile-Imge" />
                                <div className="widgetSmUser">
                                    <span className="widgetSmUsername">{user.username}</span>
                                    <span className="widgetSmUserTitle">{user.email}</span>
                                </div>
                            </div>
                            <button className="widgetSmButton">
                                <VisibilityIcon className="widgetSmbuttonIcon" />
                                Display
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default WidgetSm;

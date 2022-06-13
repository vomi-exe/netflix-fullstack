import React, { useState, useEffect } from 'react';
import "./widgetSm.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from "axios";
const WidgetSm = () => {

    const [newUser, setNewUser] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("users?new=true", {
                    headers: {
                        token: "Beaere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDYzNDEyYzQ0ODIxMmQzYjdiM2FiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMjkwMSwiZXhwIjoxNjU1MzY0OTAxfQ.PTXl3xyrMKDhPPJxHddsuaCtmBM-x_l8lTNkM3PFtcM"
                    },
                });
                setNewUser(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        getNewUsers();
    }, []);


    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Members</span>
            <ul className="widgetSmList">
                {
                    newUser.map((user) => (
                        <li className="widgetSmListItem">
                            <img className="widgetSmImg"
                                src={user.profilePic ? user.profilePic : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                                alt="Profile-Imge" />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                <span className="widgetSmUserTitle">{user.email}</span>
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

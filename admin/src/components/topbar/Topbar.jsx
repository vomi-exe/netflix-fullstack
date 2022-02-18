import React from 'react';
import './topbar.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PublicIcon from '@material-ui/icons/Public';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";

import { useState } from 'react';

const Topbar = () => {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);



    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <Link className="link" to="/">
                    <div className="topLeft">
                        <span className="logo">Admin</span>
                    </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <span className="topIcon" onMouseEnter={() => setIsShown1(true)}
                            onMouseLeave={() => setIsShown1(false)} >
                            {isShown1
                                ? <NotificationsNoneIcon />
                                : <NotificationsIcon />
                            }
                            <span className="topIconBagde">2</span>
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <span className="topIcon" onMouseEnter={() => setIsShown2(true)}
                            onMouseLeave={() => setIsShown2(false)} >
                            {isShown2
                                ? <PublicIcon />
                                : <LanguageIcon />
                            }
                            <span className="topIconBagde">2</span>
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <span className="topIcon" onMouseEnter={() => setIsShown3(true)}
                            onMouseLeave={() => setIsShown3(false)} >
                            {isShown3
                                ? <SettingsApplicationsIcon />
                                : <SettingsIcon />
                            }
                            <span className="topIconBagde">2</span>
                        </span>
                    </div>
                    <img className="avatarImgTop" src="https://pbs.twimg.com/profile_images/831433602009292800/gUK32WmZ_400x400.jpg" alt="Admin-imge" />

                </div>
            </div>
        </div>
    );
}

export default Topbar;

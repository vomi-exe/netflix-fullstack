import React from 'react';
import "./user.css";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Link } from "react-router-dom";


const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link className="link" to="newuser">
                    <Button className="userAddButton" variant="outlined" color="secondary" >Create</Button>
                </Link>
            </div>
            <div className="userInfo">
                <div className="userInfoLeft">
                    <div className="userInfoUpper">
                        <div className="userInfoUpperAbout">
                            <img
                                className="userInfoUpperAboutImg"
                                src="https://images.pexels.com/photos/9869565/pexels-photo-9869565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt=""
                            />
                            <div className="UserInfoDetails">
                                <span className="userInfoName">
                                    Anna Beker
                                </span>
                                <span className="userInfoOccupation">
                                    Software Engineer
                                </span>
                            </div>
                        </div>
                        <div className="userInfoUpperAccountDetails">
                            <h3 className="userInfoAcoountTitle">Account Details </h3>
                            <div className="userInfoUsername">
                                <PermIdentityIcon className="userInfoIcon" />
                                <span className="userInfoUsernameName">annabeck99</span>
                            </div>
                            <div className="userInfoBirth">
                                <CalendarTodayIcon className="userInfoIcon" />
                                <span className="userInfoBirthInfo">10.12.1999</span>
                            </div>
                        </div>
                    </div>
                    <div className="userInfoDown">
                        <div className="userInfoContact">
                            <h3 className="userInfoContactTitle">Contact Details</h3>
                            <div className="userInfoContactMobile">
                                <PermIdentityIcon className="userInfoIcon" />
                                <span className="userInfoContactNumber">+1 123 456 789</span>
                            </div>
                            <div className="userInfoContactEmail">
                                <CalendarTodayIcon className="userInfoIcon" />
                                <span className="userInfoContactMail">annabecke69@gmail.com</span>
                            </div>
                            <div className="userInfoPlace">
                                <CalendarTodayIcon className="userInfoIcon" />
                                <span className="userInfoContactHomeAddress">New York | USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <sapn className="userUpdateTitle">Edit</sapn>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="annabeker99"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input
                                    type="text"
                                    placeholder="annabecke69@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Mobile</label>
                                <input
                                    type="text"
                                    placeholder="+1 123 456 789"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input
                                    type="text"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/9869565/pexels-photo-9869565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="" />
                                <input type="file" style={{ display: "none" }} id="file" />
                            </div>
                            <label htmlFor="file" className="userUpdateUploadBtn" >
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            <Button className="userUpdateBtn" variant="contained" component="span">
                                Update
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default User;

import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StoreIcon from '@material-ui/icons/Store';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ReportIcon from '@material-ui/icons/Report';
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarList">
                        <NavLink className="sidebarListItem link" exact to="/"
                            activeClassName="active"
                        >
                            <li className="listItemSidebar">
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/analytics" >
                            <li className="listItemSidebar">
                                <TimelineIcon className="sidebarIcon" />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/Sales">
                            <li className="listItemSidebar">
                                <TrendingUpIcon className="sidebarIcon" />
                                Sales
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Quick Menu</h2>
                    <ul className="sidebarList">
                        <NavLink className="sidebarListItem link" activeClassName="active" to="/users">
                            <li className="listItemSidebar">
                                <AccountCircleIcon className="sidebarIcon" />
                                Users
                            </li>
                        </NavLink >
                        <NavLink className="sidebarListItem link" activeClassName="active" to="/products">
                            <li className="listItemSidebar" >
                                <StoreIcon className="sidebarIcon" />
                                Products
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/transcripts">
                            <li className="listItemSidebar" >
                                <ReceiptIcon className="sidebarIcon" />
                                Transcripts
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/assessment">
                            <li className="listItemSidebar" >
                                <AssessmentIcon className="sidebarIcon" />
                                Assessment
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Notification</h2>
                    <ul className="sidebarList">
                        <NavLink className="sidebarListItem link" to="/mails">
                            <li className="listItemSidebar">
                                <MailOutlineIcon className="sidebarIcon" />
                                Mails
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/feedback">
                            <li className="listItemSidebar" >
                                <DynamicFeedIcon className="sidebarIcon" />
                                Feedback
                            </li>
                        </NavLink>

                        <NavLink className="sidebarListItem link" to="/messages">
                            <li className="listItemSidebar">
                                <QuestionAnswerIcon className="sidebarIcon" />
                                Messages
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Stuff</h2>
                    <ul className="sidebarList">
                        <NavLink className="sidebarListItem link" to="/manage">
                            <li className="listItemSidebar">
                                <SupervisedUserCircleIcon className="sidebarIcon" />
                                Manage
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/analyticsStuff">
                            <li className="listItemSidebar">
                                <TimelineIcon className="sidebarIcon" />
                                Analytics
                            </li>
                        </NavLink>
                        <NavLink className="sidebarListItem link" to="/reports">
                            <li className="listItemSidebar">
                                <ReportIcon className="sidebarIcon" />
                                Reports
                            </li>
                        </NavLink>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;

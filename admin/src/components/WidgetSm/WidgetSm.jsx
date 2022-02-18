import React from 'react';
import "./widgetSm.css";
import VisibilityIcon from '@material-ui/icons/Visibility';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                        src="https://images.pexels.com/photos/8537298/pexels-photo-8537298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Profile-Imge" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmbuttonIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                        src="./person/3.jpeg"
                        alt="Profile-Imge" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lon Moore</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmbuttonIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                        src="./person/11.jpeg"
                        alt="Profile-Imge" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ben N. Syder</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmbuttonIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                        src="./person/1.jpeg"
                        alt="Profile-Imge" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Stacy Rect</span>
                        <span className="widgetSmUserTitle">Chiefwar Enginner</span>

                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmbuttonIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg"
                        src="./person/10.jpeg"
                        alt="Profile-Imge" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Andy Fel</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className="widgetSmbuttonIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSm;

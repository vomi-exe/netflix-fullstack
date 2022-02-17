
import { ArrowBackOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import "./watch.scss";
import { Link } from "react-router-dom";
const Watch = () => {

    const location = useLocation();
    const movie = location.state;

    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined className="arrow" />
                </div>
            </Link>
            <video className="video"
                src={movie.video}
                autoPlay
                progress
                controls
            ></video>
        </div>
    )
};

export default Watch;

import { useState, useEffect } from "react";
import { PlayArrow, AddOutlined, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom"


const ListItem = ({ index, setNum, num, id }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = async () => {
            try {
                const res = await axios.get("movies/find/" + id, {
                    headers: {
                        token: "Beaere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDYzNDEyYzQ0ODIxMmQzYjdiM2FiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjM2NzM0NiwiZXhwIjoxNjgyNzk5MzQ2fQ.RFBDYv50F_IRpnAbWa2w-CW_s5M98nQJNFTbY3MKhKw"
                    },
                });
                setItem(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        getItem();
    }, [id]);

    return (
        <Link to="/watch" state={{ video: item.video }}>
            <div className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5, marginRight: (num === index) && "230px" }}
                onMouseEnter={() => { setIsHovered(true); setNum(index - 1); }}
                onMouseLeave={() => { setIsHovered(false); setNum(-1) }}
            >
                <img
                    src={item.img}
                    alt=""
                />
                {isHovered && (<>
                    <video src={item.trailer} autoPlay={true} preload="metadata" loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <AddOutlined className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{item.duration}</span>
                            <span className="limit">+{item.limit}</span>
                            <span>{item.year}</span>
                        </div>
                        <div className="desc">{item.desc}
                        </div>
                        <div className="genre">{item.genre}</div>
                    </div>
                </>)}
            </div>
        </Link>
    );
};

export default ListItem;

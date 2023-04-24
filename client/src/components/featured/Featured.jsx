import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./featured.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = ({ type }) => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Beaere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDYzNDEyYzQ0ODIxMmQzYjdiM2FiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjM2NzM0NiwiZXhwIjoxNjgyNzk5MzQ2fQ.RFBDYv50F_IRpnAbWa2w-CW_s5M98nQJNFTbY3MKhKw"
                    },
                });
                setContent(res.data[0]);
            } catch (e) {
                console.log(e);
            }
        }
        getRandomContent();
    }, [type]);



    return <div className="featured">
        {type && (
            <div className="categary">
                <span>{type === "movie" ? "Movies :" : "Series :"}</span>
                <select name="genre" placeholder="genre" id="genre">
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img
            src={content.img}
            alt=""
        />
        <div className="info">
            <img
                src={content.imgSm}
                alt=""
            />
            <span className="desc">{content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>;
};

export default Featured;

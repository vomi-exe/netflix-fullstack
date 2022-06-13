
import Featured from "../../components/featured/Featured";
import { useState, useEffect } from "react"
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setgenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "?genre=" + genre : ""}`, {
                    headers: {
                        token: "Beaere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDYzNDEyYzQ0ODIxMmQzYjdiM2FiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMjkwMSwiZXhwIjoxNjU1MzY0OTAxfQ.PTXl3xyrMKDhPPJxHddsuaCtmBM-x_l8lTNkM3PFtcM"
                    },
                });
                setLists(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        getRandomLists();
    }, [genre, type]);


    return <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list) => (
            <List list={list} />
        ))}

    </div>;
};

export default Home;

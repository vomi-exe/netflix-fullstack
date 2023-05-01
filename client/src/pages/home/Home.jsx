
import Featured from "../../components/featured/Featured";
import { useState, useEffect, useContext } from "react"
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import { AuthContext } from "../../Context/authContext/AuthContext";

const Home = ({ type }) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "?genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer " + user.accessToken
                    },
                });
                setLists(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        getRandomLists();
    }, [genre, type, user.accessToken]);


    return <div className="home">
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list, id) => (
            lists.length - 1 === id ?
                <List key={id} list={list} st /> : <List key={id} list={list} />
        ))}

    </div>;
};

export default Home;

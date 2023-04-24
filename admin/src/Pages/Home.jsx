import React, { useEffect } from 'react';
import "./home.css";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from '../components/Chart/Chart';
import WidgetSm from "../components/WidgetSm/WidgetSm";
import WidgetLg from "../components/WidgetLg/WidgetLg";
import 'aos/dist/aos.css';
import { useState, useMemo, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";



const Home = () => {
    const { user } = useContext(AuthContext);

    const MONTHS = useMemo(() =>
        [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ], []
    );

    const [userState, setUserState] = useState([]);
    useEffect(() => {
        const getState = async () => {
            try {
                const res = await axios.get(`users/stats`, {
                    headers: {
                        token: "Beaere " + user.accessToken
                    },
                });

                const statsList = res.data.sort((a, b) => (
                    a._id - b._id
                ));

                statsList.map(item =>
                    setUserState(prev => [...prev, { name: MONTHS[item._id - 1], "Active User": item.total }])
                )
            } catch (err) {
                console.log(err);
            }
        }
        getState();
    }, [MONTHS, user.accessToken]);

    console.log(userState);


    return (
        <div className="home">
            <FeaturedInfo />
            <div className="homeChart">
                <Chart isHome data={userState} title="User Analytics" grid dataKey="Active User" />
            </div>

            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}

export default Home;

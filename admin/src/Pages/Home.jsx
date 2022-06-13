import React, { useEffect } from 'react';
import "./home.css";
import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from '../components/Chart/Chart';
import { userData } from "../dummydata";
import WidgetSm from "../components/WidgetSm/WidgetSm";
import WidgetLg from "../components/WidgetLg/WidgetLg";
import 'aos/dist/aos.css';
import { useState, useMemo } from "react";
import axios from "axios";



const Home = () => {

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
                        token: "Beaere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDYzNDEyYzQ0ODIxMmQzYjdiM2FiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMjkwMSwiZXhwIjoxNjU1MzY0OTAxfQ.PTXl3xyrMKDhPPJxHddsuaCtmBM-x_l8lTNkM3PFtcM"
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
    }, [MONTHS]);

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

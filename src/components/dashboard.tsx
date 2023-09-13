import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import CookieService from "../services/cookie-service";
import {UserData} from "../interfaces/user-data";
import PlayerInfo from "./player-info";
import ClickerButton from "./clicker-button";


const Dashboard = () => {

    const navigate = useNavigate();
    const userData = useLoaderData() as UserData

    function handleLogOut() {
        CookieService.removeCookie()
        navigate("/")
    }

    function showtest() {
        console.log(userData)
    }

    return (
        <div className="px-2">
            <section className="flex justify-between">
                <h1 className="text-3xl">Pokéclicker - Dashboard</h1>
                <button className=" p-2 text-white bg-red-600 rounded-xl" onClick={handleLogOut}>Se déconnecter</button>
            </section>
            <button onClick={showtest}>test</button>
            <div className="flex">
                <PlayerInfo/>
                <ClickerButton/>

            </div>
        </div>
    );
};

export default Dashboard;
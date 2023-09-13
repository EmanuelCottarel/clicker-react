import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import CookieService from "../services/cookie-service";
import {UserData} from "../interfaces/user-data";
import PlayerInfo from "./player-info";


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
        <div>
            <section className="flex justify-between">
                <h1 className="text-3xl">Pokéclicker - Dashboard</h1>
                <button className="btn btn-red" onClick={handleLogOut}>Se déconnecter</button>

            </section>
            <button onClick={showtest}>test</button>
            <PlayerInfo/>
        </div>
    );
};

export default Dashboard;
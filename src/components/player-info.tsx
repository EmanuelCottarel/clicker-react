import React from 'react';
import {useRouteLoaderData} from "react-router-dom";
import {UserData} from "../interfaces/user-data";
import {UserWorker} from "../interfaces/user-worker";
import WorkerListElement from "./worker-list-element";

const PlayerInfo = () => {

    const userData = useRouteLoaderData("dashboard") as UserData;

    console.log(userData.userWorkers)

    return (
        <section className="border border-gray-300 p-4 w-1/4 h-screen">
            <h2>Informations</h2>
            <ul>
                <li>{userData.username}</li>
                <li>{userData.money}</li>
                <li>{userData.lastConnection}</li>
                <li>{userData.clicIncome}</li>
            </ul>

            <h2>Vos générateurs</h2>
            <WorkerListElement workers={userData.userWorkers} />



        </section>
    );
};

export default PlayerInfo;
import React from 'react';
import {useRouteLoaderData} from "react-router-dom";
import {UserData} from "../interfaces/user-data";

const PlayerInfo = () => {

    const userData = useRouteLoaderData("dashboard") as UserData;
    return (
        <section className="border border-gray-300 w-1/4 bg-red-600">
             <ul>
                <li>{userData.username}</li>
                <li>{userData.money}</li>
                <li>{userData.lastConnection}</li>
                <li>{userData.clicIncome}</li>
            </ul>
        </section>
    );
};

export default PlayerInfo;
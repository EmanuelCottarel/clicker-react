import React from 'react';
import TokenService from "../services/token-service";
import {useRouteLoaderData} from "react-router-dom";
import {UserData} from "../interfaces/user-data";
import UserService from "../services/user-service";

const ClickerButton = () => {

    const userData = useRouteLoaderData("dashboard") as UserData;

    function handleClick() {
        console.log(userData)
        const newMoney = {
            money: userData.money + userData.clicIncome
        }
        UserService.patchUserMoney(userData.id, newMoney);
    }


    return (
        <div className="flex justify-center items-center border w-1/2">
            <div className="rounded-full border w-32 h-32 bg-red-400 cursor-pointer" onClick={handleClick}></div>

        </div>
    );
};

export default ClickerButton;
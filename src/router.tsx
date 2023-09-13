import {createBrowserRouter} from "react-router-dom";
import Connexion from "./components/connexion";
import App from "./App";
import React from "react";
import UserService from "./services/user-service";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Connexion/>
    },
    {
        path: "dashboard",
        id: "dashboard",
        element: <App/>,
        loader: () => {
            return UserService.getGameData();
        }
    }
])

export default router;
import React from 'react';
import Login from "./login";
import Register from "./register";

const Connexion = () => {
    return (
        <div className="flex flex-col gap-3">
            <Login />
            <Register />
        </div>
    );
};

export default Connexion;
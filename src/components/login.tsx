import React, {FormEvent} from 'react';
import {loginData} from "../interfaces/login-data";
import UserService from "../services/user-service";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: loginData = {
            'username': event.currentTarget.username.value,
            'password': event.currentTarget.password.value
        }

        UserService.checkLogin(formData).then(_=>     navigate("/dashboard"))
    }

    return (
        <div className="w-1/4">
            <h2>Formulaire de connexion</h2>
            <form className="flex gap-3" onSubmit={submitForm}>
                <div className="flex flex-col">
                    <label htmlFor="username" className="">Nom d'utilisateur</label>
                    <input type="text" name="username" className="border"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" className="border"/>
                </div>
                <input type="submit" className="bg-blue-500 px-4 rounded-xl text-white w-25"/>
            </form>

        </div>
    );
};

export default Login;
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
        <div className="w-25">
            <h2>Formulaire de connexion</h2>
            <form className="d-flex gap-3" onSubmit={submitForm}>
                <div className="d-flex flex-column justify-content-start align-content-start">
                    <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                    <input type="text" name="username" className="form-control"/>
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password"/>
                </div>
                <input type="submit" className="btn btn-warning w-25"/>
            </form>

        </div>
    );
};

export default Login;
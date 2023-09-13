import React, {FormEvent} from 'react';
import {registerData} from "../interfaces/register-data";
import UserService from "../services/user-service";

const Register = () => {

     const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData: registerData = {
            'username': event.currentTarget.username.value,
            'plainPassword': event.currentTarget.password.value
        }
        UserService.register(formData);
    }

    return (
        <div>
            <h2>Inscription</h2>
                <form className="d-flex gap-3" onSubmit={submitForm}>
                <div className="d-flex flex-column justify-content-start align-content-start">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" name="username"/>
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="passsword" name="password"/>
                </div>
                <input type="submit" className="btn btn-warning w-25"/>
            </form>
        </div>
    );
};

export default Register;
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
                <form className="flex gap-3 w-1/4" onSubmit={submitForm}>
                <div className="flex flex-col">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" name="username" className="border"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="passsword" name="password" className="border"/>
                </div>
                <input type="submit" className="bg-blue-500 px-4 rounded-xl text-white w-25"/>
            </form>
        </div>
    );
};

export default Register;
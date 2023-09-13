import {loginData} from "../interfaces/login-data";
import {registerData} from "../interfaces/register-data";
import CookieService from "./cookie-service";

export default class UserService {
    static baseUrl = "https://localhost:8000/api";

    static async checkLogin(data: loginData) {
        return await fetch(`${this.baseUrl}/login_check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.cookie = `token = ${data.token}`;
            })
            .catch((error) => console.log("Erreur lors de la récupération du token", error));
    }

    static async register(data: registerData) {
        return await fetch(`${this.baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((data) => {
                console.log("Utilisateur crée avec succès")
            })
            .catch((error) => {
                console.log("La création de l'utilisateur a échoué, veuillez réessayer", error)
            });
    }

    static async getGameData() {
        return await fetch(`${this.baseUrl}/user/data`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${CookieService.getCookie('token')}`,
                accept: "application/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                return data
            })
            .catch((error) => console.error(error))


    }
}
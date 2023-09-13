import CookieService from "./cookie-service";
import jwt_decode from "jwt-decode";
import {Token} from "../interfaces/token";

export default class TokenService {

    static getToken(): Token | null {
        const token = CookieService.getCookie('token');
        if (token) {
            return jwt_decode(token);
        }
        return null
    }



}
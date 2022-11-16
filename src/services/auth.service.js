import axios from "axios";
import { decode } from "jsonwebtoken";
import config from "../config/config.json";

// const API_URL = "http://localhost:8080/users";
const API_URL = config.apiUrl;

class AuthService {
    async login(data) {
        const authRequest = await axios.post(`${API_URL}users/auth`, data);
        if(authRequest.data.token) {
            localStorage.setItem('token', authRequest.data.token);

            const decoded = decode(authRequest.data.token);
            localStorage.setItem('user', decoded);
        }
        return {
            data: authRequest.data, 
            currentUser: localStorage.getItem('user')
        };
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}

export default new AuthService();
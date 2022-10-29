import axios from "axios";
import { decode } from "jsonwebtoken";

const API_URL = "http://localhost:8080/users";

class AuthService {
    async login(data) {
        const authRequest = await axios.post(`${API_URL}/auth`, data);
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
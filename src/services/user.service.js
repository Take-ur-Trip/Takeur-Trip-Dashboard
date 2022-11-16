import axios from "axios";
import {authHeader} from "./auth-header";

// const API_URL = "http://localhost:8080/users";
const API_URL = config.apiUrl;

class UserService {
    async fetchUser(id) {
        const response = await axios.get(`${API_URL}users/fetch${id ? `/${id}` : ""}`, {
            headers: authHeader()
        })

        return {users: response.data};
    }

    async banUser(id, masterPassword) {
        const response = await axios.post(`${API_URL}users/ban/${id}`, {masterPassword}, {
            headers: authHeader()
        })

        return response.data;
    }

    async unbanUser(id, masterPassword) {
        const response = await axios.post(`${API_URL}users/unban/${id}`, {masterPassword}, {
            headers: authHeader()
        })

        return response.data;
    }
}

export default new UserService();
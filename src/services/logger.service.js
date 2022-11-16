import axios from "axios";
import {authHeader} from "./auth-header";

// const API_URL = "http://localhost:8080/logs";
const API_URL = config.apiUrl;

class LoggerService {
    async fetchLogs() {
        const response = await axios.get(`${API_URL}logs/fetch`, {
            headers: authHeader()
        })
        return {logs: response};
    }
}

export default new LoggerService();

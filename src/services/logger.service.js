import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "http://localhost:8080/logs";

class LoggerService {
    async fetchLogs() {
        const response = await axios.get(`${API_URL}/fetch`, {
            headers: authHeader()
        })
        return {logs: response};
    }
}

export default new LoggerService();

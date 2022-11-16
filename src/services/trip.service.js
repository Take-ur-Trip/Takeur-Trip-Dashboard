import axios from "axios";
import { authHeader } from "./auth-header";

// const API_URL = "http://localhost:8080/trip";
const API_URL = config.apiUrl;

class TripService {
    async fetchTrips(id) {
        const response = await axios.get(`${API_URL}trip/fetch${id ? `/${id}` : ""}`, {
            headers: authHeader(),
        },
        )

        return {trips: response};
    }
}

export default new TripService();
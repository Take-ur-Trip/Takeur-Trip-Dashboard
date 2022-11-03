import axios from "axios";
import { authHeader } from "./auth-header";

const API_URL = "http://localhost:8080/trip";

class TripService {
    async fetchTrips(id) {
        const response = await axios.get(`${API_URL}/fetch${id ? `/${id}` : ""}`, {
            headers: authHeader(),
        },
        )

        return {trips: response};
    }
}

export default new TripService();
import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "http://localhost:8080/rating";

class RatingService {
    async fetchRating(id) {
        const response = await axios.get(`${API_URL}/fetch${id ? `/${id}` : ""}`, {
            headers: authHeader()
        })

        return {rating: response};
    }
}

export default new RatingService();
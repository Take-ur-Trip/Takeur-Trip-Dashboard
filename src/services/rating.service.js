import axios from "axios";
import {authHeader} from "./auth-header";
import config from "../config/config.json";

// const API_URL = "http://localhost:8080/rating";
const API_URL = config.apiUrl;

class RatingService {
    async fetchRating(id) {
        const response = await axios.get(`${API_URL}rating/fetch${id ? `/${id}` : ""}`, {
            headers: authHeader()
        })

        return {rating: response};
    }
}

export default new RatingService();
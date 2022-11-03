import { FETCH_RATING } from "./types";
import RatingService from "../services/rating.service";

export const fetchRating = id => dispatch => {
    return RatingService.fetchRating(id).then((res) => {
        if(res.rating.status == 200) {
            dispatch({
                type: FETCH_RATING,
                payload: res.rating.data
            })
            return Promise.resolve();
        }
        return Promise.reject();
    }).catch(error => {
        return Promise.reject();
    })
}
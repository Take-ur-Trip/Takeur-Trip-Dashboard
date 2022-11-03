import { FETCH_TRIPS } from "./types";
import TripService from "../services/trip.service";

export const fetchTrips = id => dispatch => {
    return TripService.fetchTrips(id).then((res) => {
        if(res.trips.status == 200) {
            console.log(res)
            dispatch({
                type: FETCH_TRIPS,
                payload: res.trips.data
            })
            return Promise.resolve();
        }
        return Promise.reject();
    }).catch(error => {
        return Promise.reject();
    })
}
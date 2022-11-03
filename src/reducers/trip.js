import { FETCH_TRIPS } from "../actions/types";

const initialState = {
    isLoading: true,
    fetchedTrips: [null]
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case FETCH_TRIPS:
            return {
                ...state,
                isLoading: false,
                fetchedTrips: payload
            }
        default:
            return state
    }
}
import { FETCH_RATING } from "../actions/types";

const initialState = {
    isLoading: true,
    fetchedRating: [null]
}

export default (state = initialState, action) => {
    const { type, payload } = action; 
    switch(type) {
        case FETCH_RATING:
            return {
                ...state,
                isLoading: false,
                fetchedRating: payload
            }
        default:
            return state;
    }
};
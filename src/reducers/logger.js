import { FETCH_LOGS } from "../actions/types";

const initialState = {
    isLoading: true,
    fetchedLogs: [null]
}

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_LOGS:
            return {
                ...state,
                isLoading: false,
                fetchedLogs: payload
            }
        default:
            return state;
    }
}
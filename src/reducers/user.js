import { FETCH_USERS } from "../actions/types";

const initialState = {
    isLoading: true,
    fetchedUsers: [null]
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case FETCH_USERS:
            return {
                ...state,
                isLoading: false,
                fetchedUsers: payload
            }
        default:
            return state;
    }
}
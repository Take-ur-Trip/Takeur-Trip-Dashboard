import { TOGGLE_DARKMODE } from "../actions/types";

const darkModeStorage = localStorage.getItem("darkMode");
const initialState = {
    darkMode: darkModeStorage ? true : false
}

export default (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_DARKMODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}
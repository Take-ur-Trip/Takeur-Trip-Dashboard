import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import trip from "./trip";
import user from "./user";
import rating from "./rating";
import logger from "./logger";
import darkMode from "./darkMode";

export default combineReducers({
    auth, message, darkMode, user, trip, rating, logger
});
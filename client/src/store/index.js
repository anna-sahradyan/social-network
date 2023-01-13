import {combineReducers} from "redux";
import posts from "./postSlice.js";
import auth from "./authSlice.js";

const rootReducer = combineReducers({
    posts,
    auth,
    devTools: true,
})
export default rootReducer;

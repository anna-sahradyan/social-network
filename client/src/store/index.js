import {combineReducers} from "redux";
import posts from "./postSlice.js";

const rootReducer = combineReducers({
    posts,
    devTools: true,
})
export default rootReducer;

import {combineReducers} from "redux";
import posts from "../containers/postSlice.js";

const rootReducer = combineReducers({
    posts,
    devTools: true,
})
export default rootReducer;

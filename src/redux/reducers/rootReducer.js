import {combineReducers} from "redux";
import quiz from "./quiz";
import createReducer from "./create";

export default combineReducers({
    quiz: quiz,
    create: createReducer
});
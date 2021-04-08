import {combineReducers} from "redux";
import quiz from "./quiz";
import quizCreator from "./creator";

export default combineReducers({
    quiz: quiz,
    quizCreator: quizCreator
});
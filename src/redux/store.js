import quizListReducer from "./reducers/quizListReducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const {createStore} = require("redux");

const store = createStore(quizListReducer, applyMiddleware(thunk));

export default store;
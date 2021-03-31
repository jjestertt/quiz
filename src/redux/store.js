import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const {createStore} = require("redux");

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
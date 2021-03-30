import quizListReducer from "./quizListReducer";

const {createStore} = require("redux");

const store = createStore(quizListReducer);

export default store;
import axios from "../../axios/axios";

import {
    FETCH_QUIZ_START,
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_ERROR
} from "./actionTypes";


export const fetchQuizStart = () => ({
    type: FETCH_QUIZ_START
});
export const fetchQuizSuccess = (payload) => {
    return {type: FETCH_QUIZ_SUCCESS, payload};
}
export const fetchQuizError = () => ({
    type: FETCH_QUIZ_ERROR
});

export const fetchQuiz = () => async dispatch => {
    dispatch(fetchQuizStart());

    try {
        const response = await axios.get("quizes.json");
        const payload = Object.keys(response.data).map(el => ({id: el}));
        dispatch(fetchQuizSuccess(payload));

    } catch (e) {
        dispatch(fetchQuizError());
        console.error(e);
    }
}
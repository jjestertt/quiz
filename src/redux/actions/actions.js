import axios from "../../axios/axios";

import {
    FETCH_QUIZ_START,
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_ERROR,
    FETCH_QUIZ_BY_ID_SUCCESS, RESTART_QUIZ, ANSWER_SET_STATE, FINISHED_QUIZ, NEXT_QUESTION
} from "./actionTypes";


export const fetchQuizStart = () => ({
    type: FETCH_QUIZ_START
});

export const fetchQuizSuccess = (payload) => {
    return {type: FETCH_QUIZ_SUCCESS, payload};
}

export const fetchQuizByIdSuccess = (payload) => {
    return {type: FETCH_QUIZ_BY_ID_SUCCESS, payload};
}

export const fetchQuizError = (error) => ({
    type: FETCH_QUIZ_ERROR,
    error
});

export const answerSetState = (answerState) => ({
    type: ANSWER_SET_STATE, answerState
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION
});

export const finishedQuiz = () => ({
    type: FINISHED_QUIZ
});

export const restartQuiz = () => {
    return {type: RESTART_QUIZ};
}




export const fetchQuiz = () => async dispatch => {
    dispatch(fetchQuizStart());

    try {
        const response = await axios.get("quizes.json");
        const payload = Object.keys(response.data).map(el => ({id: el}));
        dispatch(fetchQuizSuccess(payload));

    } catch (e) {
        dispatch(fetchQuizError(e));
    }
}

export const fetchQuizById = (id = {}) => async dispatch => {
    dispatch(fetchQuizStart());
    try {
        let response = await axios.get(`quizes/${id}.json`);
        dispatch(fetchQuizByIdSuccess(response.data));
    } catch (e) {
        dispatch(fetchQuizError(e));
    }
}


//Получаем правильный ответ у активного вопроса;
// если в answerState success то return;
// answerState существует для присвоения класса success или error при клике;
// Сравниваем правильный ответ с введенным;
//Если true записываем в answerState и (results(толко если нет false) id и success);
//Ждем секунду и проверяем последний ли вопрос в списке;
// Если true выводим Окно с правильными ответами;
// Если false переключаем вопрос на следующий;
//Если false записываем в answerState и results id и error ;
export const quizAnswerClick = (answerId) => (dispatch, getState) => {
    const state = getState().quiz;

    if (state.answerState) {
        const key = Object.keys(state.answerState)[0];
        if (state.answerState[key] === "success") {
            return;
        }
    }

    const question = state.quiz[state.activeQuestion];
    const results = state.results;

    if (question.rightAnswer === answerId) {
        if (!results[question.id]) {
            results[question.id] = "success";
        }
        dispatch(answerSetState({[answerId]: "success", results}));

        const timeout = window.setTimeout(() => {
            dispatch(answerSetState(null));

            if (isQuizFinished()) {
                dispatch(finishedQuiz());
            } else {
                dispatch(nextQuestion());
            }
            window.clearTimeout(timeout);
        }, 1000)

    } else {
        results[question.id] = "error"
        dispatch(answerSetState({[answerId]: "error", results}));
    }
    const isQuizFinished = () => {
        return state.activeQuestion + 1 === state.quiz.length;
    }
}
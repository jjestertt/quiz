import axios from "../../axios/axios";

import {
    FETCH_QUIZ_START, FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_ERROR, FETCH_QUIZ_BY_ID_SUCCESS,
    QUIZ_RETRY, QUIZ_SET_STATE, QUIZ_FINISHED,
    NEXT_QUESTION,
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

export const fetchQuizError = (error)  => ({
    type: FETCH_QUIZ_ERROR,
    error
});

export const quizSetState = (answerState, results) => ({
        type: QUIZ_SET_STATE, answerState, results
});

export const nextQuestion = () => ({
    type: NEXT_QUESTION
});

export const quizFinished = () => ({
    type: QUIZ_FINISHED
});

export const quizRetry = () => {
    return {type: QUIZ_RETRY};
}
 export const toggleQuizError = error => dispatch => {
    dispatch(fetchQuizError(error));

    setTimeout(() => {
        dispatch(fetchQuizError(null))
    }, 7000);
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

export const fetchQuizById = (id) => async dispatch => {
    dispatch(fetchQuizStart());
    try {
        let response = await axios.get(`quizes/${id}.json`);
        dispatch(fetchQuizByIdSuccess(response.data));
    } catch (e) {
        dispatch(fetchQuizError(e));
    }
}

// Логика на клик по ответу
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

    //Это чтобы не нажималась кнопка если уже выбран верный ответ
    if (state.answerState) {
        const key = Object.keys(state.answerState)[0];
        if (state.answerState[key] === "success") {
            return;
        }
    }

    const question = state.quiz[state.activeQuestion];
    const results = {...state.results};


    if (question.rightAnswer === answerId) {
        if (!results[question.id]) {
            results[question.id] = "success";
        }
        dispatch(quizSetState({[answerId]: "success"}, results));

        const timeout = window.setTimeout(() => {

            if (isQuizFinished()) {
                dispatch(quizFinished());
            } else {
                dispatch(nextQuestion());
            }
            window.clearTimeout(timeout);
        }, 1000)

    } else {
        results[question.id] = "error"
        dispatch(quizSetState({[answerId]: "error"}, results));
    }
    const isQuizFinished = () => {
        return state.activeQuestion + 1 === state.quiz.length;
    }
}

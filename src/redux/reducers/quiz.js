import {
    FETCH_QUIZ_ERROR,
    FETCH_QUIZ_START,
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_BY_ID_SUCCESS, RESTART_QUIZ, ANSWER_SET_STATE, FINISHED_QUIZ, NEXT_QUESTION,
} from "../actions/actionTypes";


const initialState = {
    error: null,
    isFetch: false,
    quizes: [],
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: "success" || "error"}
    quiz: null,
}
const quiz = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZ_START:{
            return {
                ...state,
                isFetch: true
            }
        }
        case FETCH_QUIZ_SUCCESS: {
            return {
                ...state,
                isFetch: false,
                quizes: action.payload
            }
        }
        case FETCH_QUIZ_BY_ID_SUCCESS: {
            return {
                ...state,
                isFetch: false,
                quiz: action.payload
            }
        }
        case FETCH_QUIZ_ERROR: {
            return {
                ...state,
                isFetch: false,
                error: action.error
            }
        }
        case ANSWER_SET_STATE: {
            return {
                ...state,
                answerState: action.answerState,
                results: { ...state.results, ...action.results}
            }
        }
        case FINISHED_QUIZ: {
            return {
                ...state,
                isFinished: true
            }
        }
        case NEXT_QUESTION: {
            return {
                ...state,
                activeQuestion: state.activeQuestion + 1
            }
        }
        case RESTART_QUIZ: {
            return {
                ...state,
                isFinished: false,
                activeQuestion: 0,
                answerState: null,
                // Надо ли очищать массив имутабельно
                results: {},
            }
        }
        default: {
            return state;
        }
    }
}

export default quiz;
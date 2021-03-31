import {
    FETCH_QUIZ_ERROR,
    FETCH_QUIZ_START,
    FETCH_QUIZ_SUCCESS,
    FETCH_QUIZ_BY_ID_SUCCESS,
} from "../actions/actionTypes";


const initialState = {
    isFetch: false,
    quizes: [],

    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
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
                isFetch: false
            }
        }
        default: {
            return state;
        }
    }
}

export default quiz;
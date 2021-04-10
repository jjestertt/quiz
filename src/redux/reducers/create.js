import {ADD_QUESTION, QUIZ_CLEAR} from "../actions/actionTypes";

const initialState = {
    quiz: [],
}

const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION: {
            return {
                ...state,
                quiz: [...state.quiz, action.newQuestion]
            }
        }
        case QUIZ_CLEAR: {
            return {
                ...state,
                quiz: state.quiz.filter(() => false)
            }
        }
        default: {
            return state;
        }
    }
}

export default createReducer;
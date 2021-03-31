import {FETCH_QUIZ_ERROR, FETCH_QUIZ_START, FETCH_QUIZ_SUCCESS,} from "../actions/actionTypes";


const initialState = {
    isFetch: false,
    quizes: []
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
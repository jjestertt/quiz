import {SET_QUIZ_LIST} from "../actionTypes/actionTypes";


const initialState = {
    isFetch: true,
    quizes: []
}
const quizListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUIZ_LIST: {
            return {
                ...state,
                isFetch: false,
                quizes: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default quizListReducer;
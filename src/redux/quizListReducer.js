const GET_QUIZ_LIST = "GET_QUIZ_LIST";

const initialState = {
    isFetch: true,
    quizes: []
}
const quizListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUIZ_LIST: {
            return {
                ...state,
                isFetch: false,
                quizes: action.quizes
            }
        }
        default: {
            return state;
        }
    }
}

export const getQuizList = (quizes) => {
    return {type: GET_QUIZ_LIST, quizes}
}

export default quizListReducer;
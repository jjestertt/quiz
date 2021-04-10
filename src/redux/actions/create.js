import axios from "../../axios/axios";
import {ADD_QUESTION, QUIZ_CLEAR} from "./actionTypes";

//Добавляет Вопрос в массив в поле создания вопросов
export const addQuestion = (newQuestion) => {
    return {type: ADD_QUESTION, newQuestion}
}
//Очищает массив с вопросами после создания квиза
export const quizClear = () => {
    return {type: QUIZ_CLEAR}
}

export const quizCreate = () => async (dispatch, getState) => {
    const state = getState().quizCreator;
    try {
        await axios.post("quizes.json", state.quiz);
        dispatch(quizClear());
    } catch (e) {
        console.log(e);
        alert('Какая-то ошибка');
    }
}


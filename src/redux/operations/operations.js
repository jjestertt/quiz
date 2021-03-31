import {getQuizListApi} from "../../axios/quizApi";
import {setQuizList} from "../actions/actions";

export const getQuizList = () => async dispatch => {
    const data = await getQuizListApi();
    const payload = Object.keys(data).map(el => ({id: el}));
    dispatch(setQuizList(payload));
}





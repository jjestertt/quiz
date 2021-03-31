import axios from "./axios";

export const getQuizListApi = async () => {
    try {
        const response = await axios.get('quizes.json');
        return response.data;
    } catch (e) {
        return e;
    }
}
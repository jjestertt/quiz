import axios from "axios";

export default axios.create({
    baseURL: 'https://quiz-react-app-3094a-default-rtdb.firebaseio.com/',
});
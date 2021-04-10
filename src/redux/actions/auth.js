import axios from "axios";
import {AUTH_SUCCESS} from "./actionTypes";

const authSuccess = (token) => ({
    value: AUTH_SUCCESS, token
});

export const login = (email, password, isLogin) => {
    return async dispatch => {
        const authData = {
            email, password,
            returnSecureToken: true
        };
        //Создаем переменную url она ведет на эндпоинт регистрации
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I";
        //Если есть поле isLogin тогда url ведет на эндпоинт авторизации
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I";
        }
        //Отправляем запрос на сервер
        try {
            const response = await axios.post(url, authData);
            const data = response.data;

            localStorage.setItem("token", data.idToken);
            localStorage.setItem("userId", data.localId);

            const expirationDate = new Date(new Date().getTime() + data.expiriesIn * 1000);
            localStorage.setItem("expirationDate", expirationDate);

            dispatch(authSuccess(response.data.idToken));
        } catch (e) {
            console.error(e);
        }
    }
};
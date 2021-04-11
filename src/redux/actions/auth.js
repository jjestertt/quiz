import axios from "axios";
import {AUTH_SUCCESS, AUTH_LOGOUT} from "./actionTypes";

export const authSuccess = (token) => ({
    type: AUTH_SUCCESS, token
});
export const authLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
    return ({
        type: AUTH_LOGOUT
    });
}
export const autoLogin = () => dispatch => {
    let token = localStorage.getItem("token");
    let currentDate = new Date().getTime();
    let expirationDate = new Date(localStorage.getItem("expirationDate")).getTime();
    let expirationDateFrontend = (expirationDate - currentDate) / 1000

    if (!token) {
        dispatch(authLogout());
    } else if (currentDate > expirationDate) {
        dispatch(authLogout());
    } else {
        dispatch(authSuccess(token));
        dispatch(autoLogout(expirationDateFrontend));
    }
}

export const autoLogout = (time) => dispatch => {
    setTimeout(() => {
        dispatch(authLogout());
    }, time * 1000);
}

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

            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

            localStorage.setItem("token", data.idToken);
            localStorage.setItem("userId", data.localId);
            localStorage.setItem("expirationDate", expirationDate);

            dispatch(authSuccess(response.data.idToken));
            dispatch(autoLogout(data.expiresIn));
        } catch (e) {
            console.error(e);
        }
    }
};
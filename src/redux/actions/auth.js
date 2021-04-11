import axios from "axios";
import {AUTH_SUCCESS, AUTH_LOGOUT} from "./actionTypes";

export const authSuccess = (token) => ({
    type: AUTH_SUCCESS, token
});
export const authLogout = () => ({
    type: AUTH_LOGOUT
});

export const autoLogout = (time) => dispatch => {
    setTimeout(()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expirationDate");

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

            const expirationDate =  new Date(new Date().getTime() + data.expiresIn * 1000);

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
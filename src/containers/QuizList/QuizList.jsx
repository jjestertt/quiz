import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import style from "./QuizList.module.scss";
import {fetchQuiz, fetchQuizError} from "../../redux/actions/actions";
import Preloader from "../../components/UI/Preloader/Preloader";

const QuizList = props => {
    const dispatch = useDispatch();

    const isFetch = useSelector(state => state.quiz.isFetch)
    const quizes = useSelector(state => state.quiz.quizes)

    useEffect(() => {
        dispatch(fetchQuiz());
        return (() => {
            dispatch(fetchQuizError(null));
        });
    }, [dispatch]);

    const renderQuizes = () => {
        if (Object.keys(quizes).length !== 0) {
            return quizes.map((quiz, index) => (
                <li key={index}>
                    <NavLink to={"/quiz/" + quiz.id}>Тест № {index + 1}</NavLink>
                </li>
            ));
        } else {
            return (
                <div style={{color: "white", textAlign: "center"}}>
                    <h3 style={{marginBottom: "0"}}>Тестов нет</h3>
                    <p style={{margin: 0, marginTop: 10}}>Чтобы добавить свой тест</p>
                    <p style={{margin: "0"}}>Пройдите регистрацию</p>
                </div>
            );
        }
    }

    return (
        <div className={style.QuizList}>
            <div>
                <h1 className="mainTitle">Список тестов</h1>
                {
                    isFetch
                        ? <Preloader/>
                        : <ul>
                            {renderQuizes()}
                        </ul>
                }
            </div>
        </div>
    )
}
export default QuizList;
import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import style from "./QuizList.module.scss";
import {fetchQuiz} from "../../redux/actions/actions";
import Preloader from "../../components/UI/Preloader/Preloader";

const QuizList = props => {
    const dispatch = useDispatch();

    const isFetch = useSelector(state => state.quiz.isFetch)
    const quizes = useSelector(state => state.quiz.quizes)

    useEffect(() => {
        dispatch(fetchQuiz());
    }, [dispatch]);

    const renderQuizes = () => {
        if (quizes) {
            return quizes.map((quiz, index) => (
                <li key={index}>
                    <NavLink to={"/quiz/" + quiz.id}>Тест № {index + 1}</NavLink>
                </li>
            ));
        } else {
            return (
                <div style={{color: "white", textAlign: "center"}}>
                    <h3 style={{marginBottom: "0"}}>Тестов нет</h3>
                    <h4 style={{marginTop: "0"}}>Будут позже</h4>
                </div>
            );
        }
    }

    return (
        <div className={style.QuizList}>
            <div>
                <h1>QuizList</h1>
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
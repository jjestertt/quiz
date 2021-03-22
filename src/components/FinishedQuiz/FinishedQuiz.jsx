import React from "react";
import style from "./FinishedQuiz.module.scss"
import Button from "../UI/Button/Button";
import {withRouter} from "react-router-dom";

const FinishedQuiz = props => {
    const rightResults = Object.keys(props.results).filter(result => props.results[result] === "success");

    const goToListQuizHandler = () =>{
        // Это можно заменить обернув кнопку в компонент <Link />
        props.history.push({
            pathname:"/"
        });
    }

    return (
        <div className={style.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const iconStyle = [
                        "fa",
                        props.results[quizItem.id] === "success" ? "fa fa-check" : "fa fa-times",
                        style[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={quizItem.id}>
                            <strong>{index + 1}</strong>&nbsp;
                            {quizItem.question}
                            <i className={iconStyle.join(" ")}/>
                        </li>
                    );
                })}
            </ul>

            <p>Правильно {rightResults.length} из {props.quizLengh}</p>
            <div>
                <Button onClick={props.onRestart} type={"primary"}>Повторить</Button>
                <Button onClick={goToListQuizHandler} type={"success"}>Перейтии к списку тестов</Button>
            </div>

        </div>
    );
}

export default withRouter(FinishedQuiz);
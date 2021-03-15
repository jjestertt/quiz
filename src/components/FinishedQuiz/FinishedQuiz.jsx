import React from "react";
import style from "./FinishedQuiz.module.scss"

const FinishedQuiz = props => {
    const rightResults = Object.keys(props.results).filter(result => props.results[result] === "success");

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
                <button onClick={props.onRestart}>Повторить</button>
            </div>

        </div>
    );
}

export default FinishedQuiz;
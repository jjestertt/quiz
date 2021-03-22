import React from "react";
import style from "./QuizList.module.scss";
import {NavLink} from "react-router-dom";

class QuizList extends React.Component {
    renderQuizes = () => {
        return [1,2,3].map((quiz, index)=>(
            <li key={index}>
                <NavLink to={"/quiz/"+quiz}>Тест {quiz}</NavLink>
            </li>
        ));
    }
    render() {
        return (
            <div className={style.QuizList}>
                <div>
                    <h1>QuizList</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;
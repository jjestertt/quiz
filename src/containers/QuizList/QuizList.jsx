import React from "react";
import style from "./QuizList.module.scss";
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios";
import Preloader from "../../components/UI/Preloader/Preloader";

class QuizList extends React.Component {
    state = {
        isFetch: true,
        quizes: []
    }

    renderQuizes = () => {
        return this.state.quizes.map((quiz, index) => (
            <li key={index}>
                <NavLink to={"/quiz/" + quiz.id}>Тест № {index + 1}</NavLink>
            </li>
        ));
    }

    async componentDidMount() {
        try{
            const response = await axios.get('quizes.json');
            let quizes = this.state.quizes.concat();

            Object.keys(response.data).forEach((key) => {
                quizes.push({id: key});
            });

            this.setState({quizes, isFetch: false});
        } catch (e){
            console.error(e);
        }
    }

    render() {
        return (
            <div className={style.QuizList}>
                <div>
                    <h1>QuizList</h1>
                    {
                        this.state.isFetch
                            ? <Preloader/>
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }
                </div>
            </div>
        );
    }
}

export default QuizList;
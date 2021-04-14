import React, {useEffect} from "react";
import style from "./QuizCreator.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addQuestion, quizClear, quizCreate} from "../../redux/actions/create";
import QuizCreatorForm from "./QuizCreatorForm/QuizCreatorForm";


const QuizCreator = () => {
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.create.quiz);

    useEffect(() => {
        return () => {
            dispatch(quizClear());
        }
    }, [dispatch]);

    const addQuestionHandler = (isValid, dirty, values) => {
        if (isValid && dirty) {
            dispatch(addQuestion(
                {
                    id: quiz.length + 1,
                    question: values.question,
                    rightAnswer: +values.rightAnswer,
                    answers: [
                        {text: values.option1, id: 1},
                        {text: values.option2, id: 2},
                        {text: values.option3, id: 3},
                        {text: values.option4, id: 4},
                    ]
                }
            ));
        }
    }
    const createQuizHandler = () => {
        dispatch(quizCreate());
    }

    return (
        <div className={style.QuizCreator}>
            <div>
                <h1 className="mainTitle">Создание теста</h1>
                <QuizCreatorForm addQuestionHandler={addQuestionHandler}
                                 createQuizHandler={createQuizHandler}
                                 quiz={quiz}
                />
            </div>
        </div>
    );
}

export default QuizCreator;
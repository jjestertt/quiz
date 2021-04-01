import React, {useEffect} from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Preloader from "../../components/UI/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchQuizById,
    quizAnswerClick,
    restartQuiz
} from "../../redux/actions/actions";

const Quiz = props => {
    const state = useSelector(state => {
        return {
            results: state.quiz.results,
            isFinished: state.quiz.isFinished,
            activeQuestion: state.quiz.activeQuestion,
            answerState: state.quiz.answerState,
            quiz: state.quiz.quiz,
            isFetch: state.quiz.isFetch,
        }
    });
    const dispatch = useDispatch();

    const onAnswerClickHandler = answerId => {
        dispatch(quizAnswerClick(answerId));
    }

    const restartHandler = () => {
        dispatch(restartQuiz());
    }

    useEffect(()=>{
        dispatch(fetchQuizById(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    return (
        <div className={style.Quiz}>
            <div className={style.QuizWrapper}>
                <h1>Ответьте на все вопросы</h1>
                {
                    state.isFetch || !state.quiz
                        ? <Preloader/>
                        : <>
                            {state.isFinished
                                ? <FinishedQuiz
                                    quizLengh={state.quiz.length}
                                    quiz={state.quiz}
                                    results={state.results}
                                    onRestart={restartHandler}
                                />
                                : <ActiveQuiz
                                    question={state.quiz[state.activeQuestion].question}
                                    answers={state.quiz[state.activeQuestion].answers}
                                    onAnswerClick={onAnswerClickHandler}
                                    quizLengh={state.quiz.length}
                                    questionNumber={state.activeQuestion + 1}
                                    answerState={state.answerState}
                                />
                            }
                        </>
                }
            </div>
        </div>
    );
}

export default Quiz;
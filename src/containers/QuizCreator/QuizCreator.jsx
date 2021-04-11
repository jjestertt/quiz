import React, {useEffect, useState} from "react";
import style from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import {createFormControl, formValidate, validateControl} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import {addQuestion, quizClear, quizCreate} from "../../redux/actions/create";
import {useDispatch, useSelector} from "react-redux";

const createOptionControl = (number) => {
    return createFormControl({
        label: `Ответ ${number}`,
        errorMessage: "Текст не может быть пустым",
        id: number
    }, {required: true});
}
const createFormControls = () => {
    return {
        question: createFormControl({
            label: "Введите вопрос",
            errorMessage: "Вопрос не может быть пустым"
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

const QuizCreator = () => {
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.create.quiz);
    const [rightAnswer, setRightAnswer] = useState(1);
    const [isFormValid, setIsFormValid] = useState(false);
    const [formControls, setFormControls] = useState(createFormControls());

    useEffect(() => {
        return () => {
            dispatch(quizClear());
            setRightAnswer(1);
            setIsFormValid(false);
            setFormControls(createFormControls);
        }
    }, [dispatch]);

    const onChangeHandler = (value, controlName) => {
        const tempFormControls = {...formControls};
        const control = {...tempFormControls[controlName]};

        control.value = value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        tempFormControls[controlName] = control;

        setFormControls(tempFormControls);
        setIsFormValid(formValidate(formControls));
    }
    const onSubmitHandler = event => {
        event.preventDefault();
    }
    const addQuestionHandler = (event) => {
        event.preventDefault();

        const {question, option1, option2, option3, option4} = formControls;

        dispatch(addQuestion({
            id: quiz.length + 1,
            question: question.value,
            rightAnswer: +rightAnswer,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }));

        setRightAnswer(1);
        setIsFormValid(false);
        setFormControls(createFormControls);
    }
    const createQuizHandler = (event) => {
        event.preventDefault();
        dispatch(quizCreate());

        setRightAnswer(1);
        setIsFormValid(false);
        setFormControls(createFormControls);
    }
    const renderFormControls = () => {
        return (
            Object.keys(formControls).map((controlName, index) => {
                const control = formControls[controlName];
                return (
                    <React.Fragment key={index}>
                        <Input
                            label={control.label}
                            errorMessage={control.errorMessage}
                            valid={control.valid}
                            shouldValidate={!!control.validation}
                            touched={control.touched}
                            value={control.value}
                            onChange={(e) => {
                                onChangeHandler(e.target.value, controlName)
                            }}
                        />
                        {index === 0 && <hr/>}
                    </React.Fragment>
                );
            })
        );
    }
    const changeAnswerHandler = (event) => {
        setRightAnswer(event.target.value);
    }

    return (
        <div className={style.QuizCreator}>
            <div>
                <h1 className="mainTitle">Создание теста</h1>
                <form onSubmit={onSubmitHandler}>
                    {renderFormControls()}
                    <Select
                        label="Выберите правильный ответ"
                        value={rightAnswer}
                        onChange={changeAnswerHandler}
                        options={[
                            {value: 1, text: 1},
                            {value: 2, text: 2},
                            {value: 3, text: 3},
                            {value: 4, text: 4}
                        ]}
                    />
                    <Button
                        type="primary"
                        onClick={addQuestionHandler}
                        disabled={!isFormValid}
                    >
                        Добавить вопрос
                    </Button>
                    <Button
                        type="success"
                        onClick={createQuizHandler}
                        disabled={quiz.length === 0}
                    >
                        Создать тест
                    </Button>
                    <div>Вопросов добавлено {quiz.length}</div>
                </form>
            </div>
        </div>
    );
}

export default QuizCreator;
import React from "react";
import style from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import {createFormControl, formValidate, validateControl} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

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

class QuizCreator extends React.Component {
    state = {
        rightAnswer: 1,
        isFormValid: false,
        quiz: [],
        formControls: createFormControls()
    }
    onChangeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls,
            isFormValid: formValidate(formControls)
        });

    }
    onSubmitHandler = event => {
        event.preventDefault();
    }
    addQuestionHandler = (event) => {
        event.preventDefault();
    }
    createQuizHandler = (event) => {
        event.preventDefault();
    }
    renderFormControls = () => {
        return (
            Object.keys(this.state.formControls).map((controlName, index) => {
                const control = this.state.formControls[controlName];
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
                                this.onChangeHandler(e.target.value, controlName)
                            }}
                        />
                        {index === 0 && <hr/>}
                    </React.Fragment>
                );
            })
        );
    }

    changeAnswerHandler = (event) => {
        this.setState({
            rightAnswer: event.target.value
        });
    }

    render() {
        const select = (
            <Select
                label="Выберите правильный ответ"
                value={this.state.rightAnswer}
                onChange={this.changeAnswerHandler}
                options={[
                    {value: 1, text: 1},
                    {value: 2, text: 2},
                    {value: 3, text: 3},
                    {value: 4, text: 4}
                ]}
            />
        );

        return (
            <div className={style.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.onSubmitHandler}>
                        {this.renderFormControls()}
                        {select}
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;
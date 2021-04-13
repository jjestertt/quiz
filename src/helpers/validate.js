const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный Email';
    }

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (values.password.length < 6) {
        errors.password = 'Поле не может быть меньше 6 символов';
    }

    return errors;
};

export default validate;
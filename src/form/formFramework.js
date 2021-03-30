export const createFormControl = (config = {}, validation = {}) => {
    return {
        value: "",
        ...config,
        validation,
        valid: !validation,
        touched: false,
    }
}

export const validateControl = (value, validation = null) => {
    if (!validation) {
        return true;
    }

    let isValid = true;

    if (validation.required && isValid) {
        isValid = value.trim() !== "";
    }

    return isValid;
}

export const formValidate = (formControls) => {
    let isFormValid = true;

    for (let control in formControls) {
        if (formControls.hasOwnProperty(control)) {
            isFormValid = formControls[control].valid && isFormValid;
        }
    }

    return isFormValid;
}
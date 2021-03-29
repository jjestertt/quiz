export const createFormControl = (config = {}, validation = {}) => {
    return {
        value: "",
        ...config,
        validation,
        valid: !validation,
        touched: false,
    }
}

export const validateControl = (value, validation=null) => {
    if (!validation){
        return true;
    }

    let isValid = true;

    if (validation.required && isValid){
        isValid = value.trim() !== "";
    }

    return isValid;
}
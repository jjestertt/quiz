import React from "react";
import style from "./Input.module.scss";
import {Field} from "formik";


const Input = props => {
    const inputType = props.type || "text";
    const isValid = (meta) => (meta.touched && meta.error);

    return (
            <Field name={props.name}>
                {({field,  meta}) => (
                    <div className={`${style.Input} ${isValid(meta) && style.invalid}`}>
                        <label htmlFor={props.id}>
                            {props.label}
                        </label>
                        <input id={props.id} type={inputType} {...field} />
                        {isValid(meta) && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
    );
}

export default Input;
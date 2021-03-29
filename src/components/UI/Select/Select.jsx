import React from "react";
import style from "./Select.module.scss";

const Select = props => {
    const htmlFor = props.label + Math.random();
    return (
      <div className={style.Select}>
          <label htmlFor={htmlFor}>{props.label}</label>
          <select
              id={htmlFor}
              value={props.value}
              onChange={props.onChange}
          >
              {
                  props.options.map((option, i) => {
                     return (
                         <option key={i} value={option.value}>{option.text}</option>
                     );
                  })
              }
          </select>
      </div>
    );
}

export default Select;
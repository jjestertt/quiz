import React from "react";
import style from "./Select.module.scss";

const Select = props => {
    const htmlFor = props.label + Math.random();
    return (
      <div className={style.Select}>
          <label htmlFor={htmlFor}>{props.label}</label>
          <select
              name={props.name}
              id={htmlFor}
              {...props}
          >
              {
                  props.options.map((option, i) => {
                     return (
                         <option key={i}>{option.text}</option>
                     );
                  })
              }
          </select>
      </div>
    );
}

export default Select;
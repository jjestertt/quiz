import React from "react";
import style from "./MenuToggle.module.scss";

const MenuToggle = props =>{

    const cls = [
        style["MenuToggle"],
        "fa"
    ]

    if (props.isOpen){
        cls.push(style.open);
        cls.push("fa-times");
    }else {
        cls.push("fa-bars");
    }

    return(
        <i
            className={cls.join(" ")}
            onClick={props.onToggle}
        />
    );
}

export default MenuToggle;
import React from "react";
import style from "./Drawer.module.scss";
import {NavLink} from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    {to: "/", label: "Список тестов", exact: true},
    {to: "/quiz-creator", label: "Добавить тест", exact: false},
    {to: "/auth", label: "Авторизация", exact: false},
];

class Drawer extends React.Component {
    renderLinks = () => {
        return (
            links.map((link, index) => (
                <li key={index}>
                    <NavLink exact={link.exact}
                             to={link.to}
                             activeClassName={style.active}
                             onClick={this.props.onClick}
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))
        );
    }

    render() {
        return (
            <>
                {this.props.isOpen && <Backdrop onClick={this.props.onClick}/>}
                <nav className={style.Drawer + " " + (this.props.isOpen && style.open)}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </>
        );
    }
}

export default Drawer;
import React from "react";
import style from "./Drawer.module.scss";
import {NavLink} from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Button from "../../UI/Button/Button";

class Drawer extends React.Component {
    renderLinks = (links) => {
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
        let links = [
            {to: "/", label: "Список тестов", exact: true},
            {to: "/auth", label: "Авторизация", exact: false},
        ];

        if(this.props.isAuth){
            links = [
                {to: "/", label: "Список тестов", exact: true},
                {to: "/quiz-creator", label: "Добавить тест", exact: false},
            ]
        }
        return (
            <>
                {this.props.isOpen && <Backdrop onClick={this.props.onClick}/>}
                <nav className={style.Drawer + " " + (this.props.isOpen && style.open)}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                    {this.props.isAuth && <Button
                        style={{marginLeft: 20}}
                        type="error"
                        onClick={() => {
                            this.props.authLogout()
                        }}
                    >
                        Выйти
                    </Button>}
                </nav>
            </>
        );
    }
}

export default Drawer;
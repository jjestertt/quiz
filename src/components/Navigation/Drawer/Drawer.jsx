import React from "react";
import style from "./Drawer.module.scss";

const links = [
    1, 2, 3
];

class Drawer extends React.Component {
    render() {
        const linksItem = links.map((link, index) => (
            <li>
                <a href={"#/"}>
                    Link {link}
                </a>
            </li>
        ));
        return (
            <nav className={style.Drawer + " " +(this.props.isClosed && style.closed)}>
                <ul>
                    {linksItem}
                </ul>
            </nav>
        );
    }
}

export default Drawer;
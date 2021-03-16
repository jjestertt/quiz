import React from "react";
import style from "./Drawer.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1, 2, 3
];

class Drawer extends React.Component {
    renderLinks = () => {
        return (
            links.map((link, index) => (
                <li>
                    <a href={"#/"}>
                        Link {link}
                    </a>
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
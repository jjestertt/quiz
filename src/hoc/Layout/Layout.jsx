import React from "react";
import style from "./Layout.module.scss";

class Layout extends React.Component {
    render() {
        return (
            <div className={style.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
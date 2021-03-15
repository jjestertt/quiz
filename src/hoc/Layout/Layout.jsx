import React from "react";
import style from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends React.Component {

    state = {
        menu: false,
    }
    menuToggleHandler = () =>{
        this.setState({menu: !this.state.menu});
    }
    render() {
        return (
            <div className={style.Layout}>

                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.menuToggleHandler}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
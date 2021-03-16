import React from "react";
import style from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

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

                <Drawer isClosed={!this.state.menu}/>

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
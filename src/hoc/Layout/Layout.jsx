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
    menuCloseHandler = () =>{
        this.setState({menu: false});
    }
    render() {
        return (
            <div className={style.Layout}>

                <Drawer isOpen={this.state.menu} onClick={this.menuCloseHandler}/>
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
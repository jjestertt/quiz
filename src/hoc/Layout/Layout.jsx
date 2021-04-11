import React from "react";
import style from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import {connect} from "react-redux";
import {authLogout} from "../../redux/actions/auth";

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
                <Drawer isOpen={this.state.menu} onClick={this.menuCloseHandler}
                        isAuth={this.props.isAuth} authLogout={this.props.authLogout}/>
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

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token
});

export default connect(mapStateToProps, {authLogout})(Layout);
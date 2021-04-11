import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import Quiz from "./containers/Quiz/Quiz";
import {useDispatch, useSelector} from "react-redux";
import Logout from "./components/Logout/Logout";
import {useEffect} from "react";
import {autoLogin} from "./redux/actions/auth";

const App = () => {
    const isAuth = useSelector(state => !!state.auth.token);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(autoLogin())
    }, [dispatch]);

    let routes = [
        <Switch key="switch">
            <Route path="/auth" component={Auth}/>,
            <Route path="/quiz/:id" component={Quiz}/>,
            <Route exact path="/" component={QuizList}/>,
            <Redirect to="/"/>
        </Switch>
    ];

    if (isAuth) {
        routes = [
            <Switch key="switch">
                <Route path="/quiz-creator" component={QuizCreator}/>,
                <Route path="/quiz/:id" component={Quiz}/>,
                <Route path="/logout" component={Logout}/>,
                <Route exact path="/" component={QuizList}/>,
                <Redirect to="/"/>
            </Switch>
        ];
    }

    return (
        <Layout>
            {routes}
        </Layout>
    );
}

export default withRouter(App);

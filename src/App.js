import {Switch, Route} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";



function App() {
    return (
        <Layout >
            <Switch>
                <Route path='/auth' component={Auth}/>
                <Route path='/quiz-creator' component={QuizCreator}/>
                <Route path='/quiz/:id' component={Quiz}/>
                <Route exact path='/' component={QuizList}/>
            </Switch>

        </Layout>
    );
}

export default App;

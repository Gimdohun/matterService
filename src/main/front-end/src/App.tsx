import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Login from './view/login';
import Signup from './view/signup';
import Main from './view/main';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/main" render={() => <Main />} />
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import {Route, Switch } from 'react-router-dom';
import Login from './view/login';
import Signup from './view/signup';
import Main from './view/main';
import Profile from './view/menu/profile';
import UsersUpdate from './view/menu/usersUpdate';
import Qna from "./view/menu/qna";
import Test from './view/test';

function App() {
  return (

    <div className="App">
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/menu/users-update" render={() => <UsersUpdate />} />
            <Route path="/menu/profile" render={() => <Profile />} />
            <Route path="/menu/qna" render={() => <Qna />} />
            <Route path="/menu-list-name/test" render={() => <Test />} />
        </Switch>
    </div>
  );
}

export default App;

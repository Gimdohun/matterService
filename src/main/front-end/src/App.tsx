import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Login from './view/login';
import Signup from './view/signup';
import Main from './view/main';
import Profile from './view/menu/profile';
import Setting from './view/menu/setting';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/menu/setting" render={() => <Setting />} />
            <Route path="/menu/profile" render={() => <Profile />} />
        </Switch>
    </div>
  );
}

export default App;

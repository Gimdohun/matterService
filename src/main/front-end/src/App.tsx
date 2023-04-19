import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.scss';
import {Route, Switch } from 'react-router-dom';
import Login from './view/login';
import Signup from './view/signup';
import Main from './view/main';
import Profile from './view/menu/profile';
import Setting from './view/menu/setting';
import MathView from "./view/main/mathView";

function App() {
    const [hello, setHello] = useState('')

    // useEffect(() => {
    //     axios({url: 'http://locahost:8080/api/hello',
    //         method: 'GET'})
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }, []);
  return (

    <div className="App">
        <p>{hello}</p>
        <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/main" render={() => <Main />} />
            <Route path="/menu/setting" render={() => <Setting />} />
            <Route path="/menu/profile" render={() => <Profile />} />
            <Route path="/main/math-view" render={() => <MathView />} />
        </Switch>
    </div>
  );
}

export default App;

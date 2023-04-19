import React from 'react';
import Nav from '../nav';
import Category from "../category";
import { Route } from 'react-router-dom';
import MathView from "./mathView";
import EnglishView from "./englishView";
import KoreanView from "./koreanView";
import './style.scss';

const Main = () => {
    return <div className="main-container">
        <Nav />
        <Category />
        <Route path="/main/math-view" render={() => <MathView />} />
        <Route path="/main/english-view" render={() => <EnglishView />} />
        <Route path="/main/korean-view" render={() => <KoreanView />} />
    </div>
}

export default Main;
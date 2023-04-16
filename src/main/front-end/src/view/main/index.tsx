import React from 'react';
import Nav from '../nav';
import Category from "../category";
import './style.scss';

const Main = () => {
    return <div className="main-container">
        <Nav />
        <Category />
        <span>메인 화면</span>
    </div>
}

export default Main;
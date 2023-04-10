import React from 'react';

const Nav:React.FC = () => {
    return <div className="nav-container">
            <section className="logo-section">
                <img className="nav-logo" src="" alt="" />
            </section>
            <section className="search-section">
                <input className="search-input" name="search" type="text" placeholder="입력해주세요." />
            </section>
            <section className="setting-section">
                <span>설정</span>
            </section>
    </div>
}

export default Nav;
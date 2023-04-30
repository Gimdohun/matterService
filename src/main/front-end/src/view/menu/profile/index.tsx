import './style.scss';
import Nav from '../../nav';
import { useState } from 'react';

const Profile = () => {
    const [testSwitch, setTestSwitch] = useState(false);
    return <div className="profile-container">
        <Nav />
        <div className="profile-box">
            <section className="profile-info">
                <img className="profile-image" src="#" alt="#" />
                <div className="profile-meta-info">
                    <span className="profile-name">이름</span>
                    <span className="profile-email">이메일</span>
                    <span className="profile-intro">자기소개 글</span>
                </div>
            </section>
            <div className="empty-box"></div>
        </div>
        <section className="profile-post">
            <div className="profile-test-category">
                <p className="ok-test" onClick={() => setTestSwitch(true)}>
                    맞힌 문제
                </p>
                <p className="no-test" onClick={() => setTestSwitch(false)}>
                    틀린 문제
                </p>
            </div>
            <li className="test-list">
                <span>{testSwitch ? "맞힌 문제" : "틀린 문제"}</span>
            </li>
        </section>
    </div>
}

export default Profile;
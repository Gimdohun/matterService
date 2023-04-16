import React from 'react';
import {useHistory} from "react-router-dom";
import './style.scss';

const Signup = () => {
    const history = useHistory();
    return <div className="signup-container">
        <p>회원가입</p>
        <form className="signup-form">
            <input name="name" type="text" placeholder="닉네임" />
            <input name="email" type="email" placeholder="이메일" />
            <input name="password" type="password" placeholder="비밀번호" />
            <input name="checkPassword" type="password" placeholder="비밀번호 확인" />
            <input name="introduce" type="text" placeholder="자기소개 한 줄" />
            <button onClick={() => {
                    alert('회원가입 완료');
                }
            } type="button"
            className="signup-button">회원가입</button>

        </form>
        <button className="back-button" onClick={() => history.goBack()}>뒤로가기</button>
    </div>
}

export default Signup;
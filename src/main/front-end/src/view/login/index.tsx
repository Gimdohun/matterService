import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './style.scss';
import isLogin from "../../controller/isLogin";
import onChange from "../../controller/onChange";

const Login:React.FC = () => {
    const history = useHistory();
    const [loginInput, setLoginInput] = useState({email: "", password: ""});

    return (
        <div className="login-container">
        <span className="login-titles">깜지</span>
            <span className="login-sub-titles">깜지 쓰자!</span>
        <form className="login-form">
            <input
                onChange={e => onChange(e, loginInput, setLoginInput)}
                   name="email" type="text" placeholder="email"
            />
            <input
                onChange={e => onChange(e, loginInput, setLoginInput)}
                   name="password" type="password" placeholder="password"
            />
            <button onClick={() => {
                    // if (isLogin(loginInput.email, loginInput.password)) {
                    //     history.push('/main')
                    // }
                history.push("/main");
                }
            } type="button" className="login-button">로그인</button>
        </form>
        <section className="side-section">
            <button onClick={() => history.push('/signup')} className="signup-button">회원가입</button>

        </section>
    </div>
    );
}

export default Login;
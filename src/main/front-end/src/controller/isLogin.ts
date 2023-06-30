import {Users} from "../types";
import axios from 'axios';
import {getCookie, setCookie} from "../common/Cookie";

const isLogin:Users['isLoginType'] = (email, password) => {
    const emailRegExp = /[a-zA-Z0-9]+@[a-z]+\.com/g;
    const passwordRegExp = /^[a-zA-Z0-9]{8,20}$/;
    if (email.length === 0) {
        alert("이메일을 입력하세요.");
    }
    else if (!emailRegExp.test(email)) {
        alert('이메일형식을 확인해주세요.');
    }
    else if (password.length === 0) {
        alert('비밀번호를 입력하세요.');
    }
    else {
        axios.post("http://localhost:8080/api/users/login","/" + {email}, { params: {
            email: email,
            password: password
        }})
            .then(res => {
                if(res.data.email != null) {
                    const accessToken = res.data.token;
                    //쿠키에 토큰 저장
                    setCookie("is_login", `${accessToken}`);
                }
                else {
                    alert('잘못된 이메일 혹은 비밀번호')
                }
        })
            .catch(err => console.log(err));
    }
}

export default isLogin;

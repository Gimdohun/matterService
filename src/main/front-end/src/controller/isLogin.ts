import {Users} from "../types";

const isLogin:Users['isLoginType'] = (email, password) => {
    const emailRegExp = /[a-zA-Z0-9]+@[a-z]+\.com/g;
    const passwordRegExp = /^[a-zA-Z0-9]{8,20}$/;
    if (email.length === 0) {
        alert("이메일을 입력하세요.");
        return false;
    }
    else if (!emailRegExp.test(email)) {
        alert('이메일형식을 확인해주세요.');
        return false;
    }
    else if (password.length === 0) {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    else if (!passwordRegExp.test(password)) {
        alert("비밀번호가 틀렸습니다.\n다시 한번 입력해주세요.")
        return false;
    }
    else {
        alert('로그인 성공');
        return true;
    }
}

export default isLogin;
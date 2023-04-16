import {Users} from "../types";

const isLogin:Users['isLoginType'] = (email, password) => {
    if (email.length === 0) {
        alert('이메일을 입력하세요.')
        return false
    }
    if (password.length === 0) {
        alert('비밀번호를 입력하세요.')
        return false
    } else {
        alert('로그인 성공')
        return true
    }
}

export default isLogin;
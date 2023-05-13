import {Users} from "../types";
import axios from "axios";

const isSignup:Users['isSignupType'] = (name,
                                        email,
                                        password,
                                        introduce
) => {
    const emailRegExp = /[a-zA-Z0-9]+@[a-z]+\.com/g;
    const passwordRegExp =  /^[a-zA-Z0-9]{8,20}$/;
    const nameRegExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣0-9a-zA-Z]/;
    const introRegExp = /^{0, 100}$/;
    if (!emailRegExp.test(email)) {
        alert("이메일 형식을 확인해주세요.");
        return false;
    } else if (!passwordRegExp.test(password)) {
        alert("비밀번호 형식을 확인해주세요.");
        return false;
    } else if (!nameRegExp.test(name)) {
        alert("이름 형식을 확인해주세요.");
        return false;
    }
    if (name.length === 0 || email.length === 0) {
        alert("필수사항을 입력해주세요.");
        return false;
    }
    axios.post("api/users/signup", {
        name, email, password, introduce
    }).then(res => {
        console.log("회원가입 성공");
        console.log(res);
    }).catch(err => console.log(err));
    return true;
}

export default isSignup;
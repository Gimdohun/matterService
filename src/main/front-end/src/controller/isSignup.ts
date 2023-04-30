import {Users} from "../types";

const isSignup:Users['isSignupType'] = (name,
                                        email,
                                        password,
                                        introduce
) => {
    if (name.length === 0 || email.length === 0) {
        alert("필수사항을 입력해주세요.");
    }

}

export default isSignup;
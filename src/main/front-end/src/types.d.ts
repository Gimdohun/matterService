import React, { SetStateAction } from "react";

export interface Users {
    isLoginType: (email: string, password: string) => boolean;
}

export interface OnChange {
    OnChange: (e:React.ChangeEvent<HTMLInputElement>, state: null | State['LoginState'], setState: SetStateAction) => void;
}

export interface State {
    LoginState: {
        email: string;
        password: string;
    }
}
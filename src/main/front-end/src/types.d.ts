import React, { SetStateAction } from "react";

export interface Users {
    isLoginType: (email: string, password: string) => boolean;
    isSignupType: (name: string,
                   email: string,
                   password: string,
                   introduce: string ) => void;
}

export interface OnChange {
    OnChange: (e:React.ChangeEvent<HTMLInputElement>,
               state: null | State['LoginState'],
               setState: SetStateAction) => void;
}

export interface State {
    LoginState: {
        email: string;
        password: string;
    }
}
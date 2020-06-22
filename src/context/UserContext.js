import React, {createContext, useState} from "react";
import Cookies from "universal-cookie";

export const UserContext = createContext();

export const UserProvider = props => {
    const checkStatusInCookie = () => {
        let cookie = new Cookies();
        let status = cookie.get("isLoggedIn");
        return status ? JSON.parse(status) : false;
    };

    const [isLoggedIn, setLoggedIn] =  useState(checkStatusInCookie());

    const [passwordMissMatch, setPasswordMissMatch] = useState(false);

    const changeLoginStatus = () => {
        setLoggedIn(!isLoggedIn);
    };

    const register = () => {
        const url = "";

    }

    const login = () => {
        const url = "";
    }

    const logout = () => {
        const url = "";
    }

    return (
        <UserContext.Provider
            value={{
                register,
                login,
                logout,
                isLoggedIn,
                setLoggedIn,
                changeLoginStatus,
                passwordMissMatch,
                setPasswordMissMatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
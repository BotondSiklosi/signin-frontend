import React, {createContext, useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = props => {
    const checkStatusInCookie = () => {
        let cookie = new Cookies();
        let status = cookie.get("isLoggedIn");
        return status ? JSON.parse(status) : false;
    };

    const [isLoggedIn, setLoggedIn] =  useState(checkStatusInCookie());

    const [loginPopup, setLoginPopup] = useState(false);


    const changeLoginStatus = () => {
        setLoggedIn(!isLoggedIn);
    };

    const customRegister = (name, email, password) => {
        const url = "/auth/register";
        axios.post(url, {
            username: name,
            email: email,
            password: password
        }).then(response => {
            console.log(response)
        }).catch(reason => {
            console.log(reason)
        })

    }

    const login = (name, password) => {
        const url = "/auth/login";
        axios.post(url, {
            username: name,
            password: password
        }).then(response => {
            console.log(response);
        }).catch(reason => {
            console.log(reason);
        })
    }

    const logout = () => {
        const url = "/auth/logout";
        axios.get(url)
            .then(response => {
                console.log(response);
            })
            .catch(reason => {
                console.log(reason);
            })
    }

    return (
        <UserContext.Provider
            value={{
                customRegister,
                login,
                logout,
                isLoggedIn,
                setLoggedIn,
                changeLoginStatus,
                loginPopup,
                setLoginPopup
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
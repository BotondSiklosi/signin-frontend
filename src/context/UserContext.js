import React, {createContext, useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = props => {

    const me = () => {
        let name = "";
        const url = "/auth/me"

        axios.get(url)
            .then(resp => {
                if (resp.status === 200) {
                    name = resp.data;
                } else {
                    name = "";
                }
            })
            .catch(res => console.log(res))
        console.log(name)
        return name
    }

    const [isLoggedIn, setLoggedIn] =  useState(null);

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
            email: "admin@thegod.com",
            password: password
        }).then(response => {
            setLoggedIn(response.data);
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
                setLoginPopup,
                me
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
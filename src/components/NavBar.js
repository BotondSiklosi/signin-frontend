import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import LoginPopup from "./LoginPopup";
import {UserContext} from "../context/UserContext";

const StyledNavBar = styled.div`
    .navBar-container {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 100vw;
        height: 60px;
        background-color: #e2e2e2;
        
        .login-button {
            position: absolute;
            right: 50px;
            width: 55px;
            height: 25px;
            color: white;
            background-color: black;
            border: 1px solid black;
            border-radius: 1rem;
            transition: background-color .25s ease;
        }
        
        .login-button:hover {
            background-color: #767171;
        }
    }

`;

function NavBar() {

    const { loginPopup, setLoginPopup, isLoggedIn, setLoggedIn, me } = useContext(UserContext);


    const changeLogInPopup = () => {
        setLoginPopup(!loginPopup)
    }

    const changeIsLoggedIn = () => {
        setLoggedIn(null)
    }

    return (
        <StyledNavBar>
            {isLoggedIn ?
                <div className="navBar-container">
                    <button className="login-button" onClick={changeIsLoggedIn}>logout</button>
                </div>
                :
                <div className="navBar-container">
                    <button className="login-button" onClick={changeLogInPopup}>Login</button>
                </div>
            }

            {loginPopup && <LoginPopup />}
        </StyledNavBar>
    )

}

export default NavBar;

import React, {useContext, useState} from 'react';
import NavBar from "./components/NavBar";
import {UserContext, UserProvider} from "./context/UserContext";
import LoginPopup from "./components/LoginPopup";
import GlobalStyle from "./Style/GlobalStyle";
import TextBody from "./components/TextBody";

function App() {



  return (
    <div className="App">
        <UserProvider>
            <GlobalStyle />
                <NavBar />
                <TextBody />
        </UserProvider>
    </div>
  );
}

export default App;
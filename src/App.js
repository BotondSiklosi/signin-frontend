import React from 'react';
import NavBar from "./components/NavBar";
import {UserProvider} from "./context/UserContext";
import LoginPopup from "./components/LoginPopup";
import GlobalStyle from "./Style/GlobalStyle";

function App() {
  return (
    <div className="App">
        <UserProvider>
            <GlobalStyle />
                <LoginPopup />
                <NavBar />
        </UserProvider>


    </div>
  );
}

export default App;

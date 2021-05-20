import { LoginButton } from "./Login";
import { Profile } from "./Profile";
import { LogoutButton } from "./Logout";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React, { Fragment } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <Fragment>
            <Profile />
            <LogoutButton />
          </Fragment>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default App;

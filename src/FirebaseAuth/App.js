import "./App.css";
import React from "react";
import Mainpage from "./components/Login/Main";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Login from "./components/Login/Login";
// import Mainpage from "./components/Login/Main";

function App() {
  const [user] = useAuthState(auth);
  console.log(auth);
  // localStorage.setItem("User", user);
  return (
    <Router>
      <Switch>{user ? <Mainpage /> : <Login />}</Switch>
    </Router>
  );
}

export default App;

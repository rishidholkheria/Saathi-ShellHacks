import React from "react";
import { auth } from "../../firebase";
import SignIn from "../Posts/CreatePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Mainpage = () => {
  // Signout function
  const logout = () => {
    auth.signOut();
  };

  return (
    <div>
      Welcome
      {auth.currentUser.email}
      <SignIn />
      <button style={{ marginLeft: "20px" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Mainpage;

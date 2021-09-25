import React from "react";
import { auth, provider } from "../../firebase";

const Login = () => {
  // Sign in with google
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <div>
      <center>
        <button onClick={signin}>Sign In with Google</button>
      </center>
    </div>
  );
};

export default Login;

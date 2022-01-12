import React from "react";
import { Button } from "@material-ui/core";

import firebaseApp from "../firebase/credentials";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function Login() {
  function logInGoogle() {
    signInWithPopup(auth, googleProvider);
  }

  return (
    <div className="login">

      <div className="login__logo">   
        <img src="https://raw.githubusercontent.com/mysticBel/discord-react/adbd943854ae4a93de262108a6b305a8e13ce37d/src/assets/imag-title-logo.png" alt="discord__logo" />
        <img src="https://raw.githubusercontent.com/mysticBel/discord-react/adbd943854ae4a93de262108a6b305a8e13ce37d/src/assets/imag-logo-animal.png" alt="" />
        {/* <img src="https://1000marcas.net/wp-content/uploads/2020/11/Discord-logo.png" alt="discord__logo" /> */}
        {/* <img src="https://i.scdn.co/image/ab67706c0000bebb89ee2d1d4947372cfbd39083" alt="" /> */}
      </div>
      <Button onClick={logInGoogle}>Enter with Google</Button>
    </div>
    
  );
}

export default Login;


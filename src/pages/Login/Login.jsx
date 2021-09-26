import React, { useState } from 'react'
import "./Login.css"
import little_girl from "../../assets/little_girl.jpg"
import { auth, provider, database } from "../../firebase";
import { ToastProvider, useToasts } from "react-toast-notifications";

const Login = () => {
    const [uid, setUid] = useState("");
    const [uName, setUName] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider).then(data => {
            console.log("User ID :- ", data.user.uid);
            setUid(data.user.uid);
            localStorage.setItem("SAATHI_ID", data.user.uid)
            setUName(data.user.displayName);
            localStorage.setItem("NAME", data.user.displayName)
        }).catch(alert);

        var id = localStorage.getItem("SAATHI_ID");
        var name = localStorage.getItem("NAME");

        database
            .ref("users")
            .push({
                userId: id,
                userName: name,
                userType: "Volunteer"
            })
            .catch(alert);
    };



    return (
        <div className="loginPage">
            <div className="landingPage">
                <img src={little_girl} alt="Image Carousel" />
            </div>

            <div className="login">
                <div className="saathiIntro">
                    <p className="loginLogo">Saathi</p>
                    <p className="introData">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eum, perspiciatis quas quis nihil ducimus totam eos ea dolorum inventore, eius vitae eligendi quod quisquam neque rerum possimus aliquam atque?</p>
                </div>
                <div className="loginForm">
                    <p className="loginFormHead">Login/Signup to Saathi</p>
                    <input type="email" placeholder={"Enter Your Email"} />
                    <input type="password" placeholder={"Password"} />
                    <button>Login</button>
                    <p>Don't have an account? Register here</p>

                    <p>OR</p>
                    <button className="googeleSignin" onClick={signIn}>Login/Signup with Google</button>
                </div>

            </div>

            <div className="aboutDev">
                <p>Created by TechMarvels</p>
            </div>


        </div>
    )
}

export default Login

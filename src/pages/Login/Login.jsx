import React, { useState } from 'react'
import "./Login.css"
import little_girl from "../../assets/little_girl.jpg"
import { auth, provider, database } from "../../firebase";
import { ToastProvider, useToasts } from "react-toast-notifications";
import Carousel from "./Carousel"
import Navbar from '../../components/Navbar';

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
            {/* <div className="landingPage">
                <img src={little_girl} alt="Image Carousel" />
            </div> */}
            <Navbar />
            <div className="carousel"><Carousel /></div>


            <div className="login">
                <div className="saathiIntro">
                    <p className="loginLogo">Saathi</p>
                    <p className="introData">For us, saving our motherland is a survival truth.
                        Every week we come together, join our hands to protect
                        what is left of our planet so that the future is not wiped out before It’s time for a curtain call.

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, eum, perspiciatis quas quis nihil ducimus totam eos ea dolorum inventore, eius vitae eligendi quod quisquam neque rerum possimus aliquam atque?</p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eum aut a voluptate provident odit aliquam voluptatum consectetur. Modi ratione dolorum esse labore sint impedit suscipit sapiente nesciunt odio dignissimos?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia animi accusamus ad beatae nesciunt delectus, vitae suscipit! Velit exercitationem unde rerum quia repellendus assumenda, quo sapiente aperiam ullam quaerat id.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates illo neque ullam aliquam dolor placeat error, iure adipisci, rerum veritatis laboriosam vero maxime in. Eum sequi autem sint nulla?
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

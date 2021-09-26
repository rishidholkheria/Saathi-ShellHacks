import React from 'react'
import "./Login.css"
import little_girl from "../../assets/little_girl.jpg"

const Login = () => {
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
                    <button className="googeleSignin">Login/Signup with Google</button>
                </div>

            </div>

            <div className="aboutDev">
                <p>Created by TechMarvels</p>
            </div>


        </div>
    )
}

export default Login

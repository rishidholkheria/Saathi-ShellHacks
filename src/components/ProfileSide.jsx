import React from 'react'
import "./ProfileSide.css"
import { auth } from "../firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ProfileSide = () => {

    const logout = () => {
        auth.signOut();
    };


    return (
        <div className="profileSide">
            {/* <i class="fas fa-user-circle fa-5x"></i> */}
            <div class="circular_image">
                <img src={auth.currentUser.photoURL} />
            </div>

            <p className="userEmail">{auth.currentUser.email}</p>

            <p className="userType">Volunteer</p>
            <button onClick={logout}>
                Logout
            </button>
            <div className="notifications">
                <p className="notificationsHead">Notifications</p>
                <div className="singleNotification">
                    <p>Park Filled with Garbage near Rohini market.</p>
                    <p className="verify">Verify</p>
                </div>
                <div className="singleNotification">
                    <p>Park Filled with Garbage near Rohini market.</p>
                    <p className="verify">Verify</p>
                </div>
                <div className="singleNotification">
                    <p>Park Filled with Garbage near Rohini market.</p>
                    <p className="verify">Verify</p>
                </div>
            </div>

        </div>
    )
}

export default ProfileSide

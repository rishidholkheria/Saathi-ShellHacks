import React, { useState, useEffect } from 'react'
import "./ProfileSide.css"
import { auth, database, storage } from "../firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToVerify from './ToVerify';

const ProfileSide = () => {
    const [posts, setPosts] = useState([]);

    const logout = () => {
        auth.signOut();
    };

    var childData = [];

    useEffect(() => {
        var temp = database.ref('posts/').once("value").then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var cdata = childSnapshot.val();
                childData.push(cdata)
            });
            console.log(childData)
            setPosts(childData)
        })
    }, [])

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
                    {
                        [...posts].filter(post => post.status === "completed")
                            .map((post) => {
                                { console.log(post.title) }
                                return (
                                    <ToVerify
                                        toBeVerified={post.title} />
                                );
                            })
                    }
                </div>
            </div>

        </div>
    )
}

export default ProfileSide

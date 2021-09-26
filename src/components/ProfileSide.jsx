import React from 'react'
import "./ProfileSide.css"

const ProfileSide = () => {
    return (
        <div className="profileSide">
            <i class="fas fa-user-circle fa-5x"></i>
            <p className="userEmail">rishidholkheria@gmail.com</p>
            <p className="userType">Volunteer</p>

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

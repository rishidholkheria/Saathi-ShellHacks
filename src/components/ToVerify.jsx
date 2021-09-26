import React, { useState, useEffect } from 'react'
import "./ProfileSide.css"
import { database, storage } from "../firebase";


const ToVerify = ({ toBeVerified }) => {


    // const verifyRequest = () => {
    //     database.ref("posts/").set({
    //         status: "verified"
    //     })
    // }

    return (
        <div>
            <p>{toBeVerified}</p>
            <p className="verify">Verify</p>
        </div>
    )
}

export default ToVerify

import React from 'react'
import "./ProfileSide.css"


const ToVerify = ({ toBeVerified }) => {
    return (
        <div>
            <p>{toBeVerified}</p>
            <p className="verify">Verify</p>
        </div>
    )
}

export default ToVerify

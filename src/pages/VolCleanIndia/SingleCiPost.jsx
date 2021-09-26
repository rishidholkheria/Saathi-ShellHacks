import React from 'react'
import cleanIndiaImg1 from "../../assets/cleanIndiaImg1.jpg"


const SingleCiPost = ({ title, address, city, imageUrl, description, date }) => {

    // var url = imageUrl.slice(1, -1);
    console.log(imageUrl)
    return (
        <div className="singleLocationDetails">
            <p className="locDetailHead">{title}</p>
            <p className="locDetailDesc">{description}</p>
            <p className="locDetailAddress">Address: {address}</p>
            <img className="locDetailImg" src={imageUrl} alt="Image" />

            <div className="statusOfLoc">
                <p>Status: Pending</p>
                <i class="fas fa-circle-notch fa-lg"></i>
            </div>

            <div className="locDateCity">
                <p>{date}</p>
                <p>{city}</p>
            </div>
        </div>
    )
}

export default SingleCiPost

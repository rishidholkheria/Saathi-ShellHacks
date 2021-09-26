import React from 'react'

const SingleFbPost = ({ title, org, city, address, description, date }) => {
    return (
        <div className="fbPosts">
            <div className="singleFbPost">
                <p className="fbHead">{title}</p>
                <p className="fbOrgName">{org}</p>
                <p className="fbDesc">{description}</p>

                <div className="fbAddressInterest">
                    <p className="fbAddress">Address: {address}</p>
                    <div>
                        <i class="far fa-star fa-lg"></i>
                        <p>100 people interested</p>
                    </div>

                </div>

                <div className="locDateCity">
                    <p>{date}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleFbPost

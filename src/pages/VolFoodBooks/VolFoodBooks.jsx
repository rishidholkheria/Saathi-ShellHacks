import React from 'react'
import "./VolFoodBooks.css"

const VolFoodBooks = () => {
    return (
        <div className="volunteerPage">

            <p className="fbPageHead">Food & Books Drives</p>

            <div className="fbPosts">
                <div className="singleFbPost">
                    <p className="fbHead">Park Filled with Garbage near Rohini market.</p>
                    <p className="fbOrgName">Park Filled with Garbage near Rohini market.</p>
                    <p className="fbDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>

                    <div className="statusOfLoc">
                        <p className="fbAddress">Address: Block C Market Road 110054</p>
                        <i class="fas fa-circle-notch fa-lg"></i>
                    </div>

                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolFoodBooks

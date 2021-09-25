import React from 'react'
import "./VolCleanIndia.css"
import cleanIndiaImg1 from "../../assets/cleanIndiaImg1.jpg"

const Volunteer = () => {
    return (
        <div className="volunteerPage">
            <p className="pageHead">Clean India</p>

            <div className="addNewLocation">
                <p>Add new Location</p>
                <i class="fas fa-plus-square fa-2x"></i>
            </div>

            <div className="locationsList">
                <div className="singleLocationDetails">
                    <p className="locDetailHead">Park Filled with Garbage near Rohini market.</p>
                    <p className="locDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>
                    <p className="locDetailAddress">Address: Block C Market Road 110054</p>
                    <img className="locDetailImg" src={cleanIndiaImg1} alt="Image" />

                    <div className="statusOfLoc">
                        <p>Status: Pending</p>
                        <i class="fas fa-circle-notch fa-lg"></i>
                    </div>

                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                </div>

                <div className="singleLocationDetails">
                    <p className="locDetailHead">Park Filled with Garbage near Rohini market.</p>
                    {/* <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div> */}
                    <p className="locDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>
                    <p className="locDetailAddress">Address: Block C Market Road 110054</p>
                    <img className="locDetailImg" src={cleanIndiaImg1} alt="Image" />

                    <div className="statusOfLoc">
                        <p>Status: Pending</p>
                        <i class="fas fa-circle-notch fa-lg"></i>
                    </div>

                </div>

                <div className="singleLocationDetails">
                    <p className="locDetailHead">Park Filled with Garbage near Rohini market.</p>
                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                    <p className="locDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>
                    <p className="locDetailAddress">Location: Block C Market Road 110054</p>
                    <img className="locDetailImg" src={cleanIndiaImg1} alt="Image" />
                    <div className="statusOfLoc">
                        <p>Status: Pending</p>
                        <i class="fas fa-circle-notch fa-lg"></i>
                    </div>


                </div>

                <div className="singleLocationDetails">
                    <p className="locDetailHead">Park Filled with Garbage near Rohini market.</p>
                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                    <p className="locDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>
                    <p className="locDetailAddress">Address: Block C Market Road 110054</p>
                    <img className="locDetailImg" src={cleanIndiaImg1} alt="Image" />

                    <div className="statusOfLoc">
                        <p>Status: Pending</p>
                        <i class="fas fa-circle-notch fa-lg"></i>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Volunteer
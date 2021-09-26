import React, { useState } from 'react'
import "./VolCleanIndia.css"
import cleanIndiaImg1 from "../../assets/cleanIndiaImg1.jpg"
import { database } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider, useToasts } from "react-toast-notifications";

const Volunteer = () => {
    const [cITitle, setCiTitle] = useState("");
    const [cIDesc, setCiDesc] = useState("");
    const [cICity, setCiCity] = useState("");
    const [cIAddress, setCiAddress] = useState("");
    const [cIImage, setCiImage] = useState(null);
    const { addToast } = useToasts();

    const onClickPost = () => {
        const nTitle = cITitle;
        const nDesc = cIDesc;
        const nCity = cICity;
        const nAddress = cIAddress;

        database
            .ref("posts")
            .push({
                title: nTitle,
                desc: nDesc,
                address: nAddress,
                city: nCity,
            })
            .catch(alert);
        addToast("Post Added!", {
            appearance: "success",
            autoDismiss: true,
        });
        setCiAddress("")
        setCiDesc("")
        setCiTitle("")
        setCiCity("")
        setCiImage("")
        console.log(nTitle, nDesc, nAddress, nCity);
    };


    return (
        <div className="volunteerPage">
            <p className="ciPageHead">Clean India</p>

            <div className="addNewLocation">
                <p>What's in your mind?</p>

                <div className="ciInputWrapper">

                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Subject/Title"
                                value={cITitle}
                                onChange={(e) => setCiTitle(e.target.value)}
                            />
                        </div>


                        <div>
                            <input
                                type="text"
                                placeholder="Enter Addres of the Location"
                                value={cIAddress}
                                onChange={(e) => setCiAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Which City"
                                value={cICity}
                                onChange={(e) => setCiCity(e.target.value)}
                            />
                        </div>

                    </div>

                    <div>

                        <div>
                            <textarea
                                type="text"
                                placeholder="Description of Problem"
                                value={cIDesc}
                                onChange={(e) => setCiDesc(e.target.value)}
                            />

                            <input
                                type="file"
                                placeholder="Image of Location"
                                value={cIImage}
                                onChange={(e) => setCiImage(e.target.value)}
                            />

                            <button className="postLocationBtn" onClick={onClickPost}>Post</button>
                        </div>

                    </div>

                </div>

                <div>
                </div>
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



            </div>

        </div>
    )
}

export default Volunteer
import React, { useState } from 'react'
import { ToastProvider, useToasts } from "react-toast-notifications";
import { database } from "../../firebase";

import "./VolHealthcare.css"

const VolHealthcare = () => {

    const [hTitle, sethTitle] = useState("");
    const [hDesc, sethDesc] = useState("");
    const [hCity, sethCity] = useState("");
    const [hAddress, sethAddress] = useState("");
    const [hOrg, sethOrg] = useState("");
    const { addToast } = useToasts();

    const onClickPost = () => {
        const nTitle = hTitle;
        const nDesc = hDesc;
        const nCity = hCity;
        const nAddress = hAddress;
        const nOrg = hOrg;
        const id = localStorage.getItem("SAATHI_ID");
        const date = new Date().toLocaleString() + ""

        database
            .ref("healthcare")
            .push({
                title: nTitle,
                desc: nDesc,
                address: nAddress,
                city: nCity,
                organisation: nOrg,
                uId: id,
                date: date
            })
            .catch(alert);
        addToast("Post Added!", {
            appearance: "success",
            autoDismiss: true,
        });
        sethAddress("")
        sethDesc("")
        sethTitle("")
        sethCity("")
        sethOrg("")
    };

    return (
        <div className="healthCare">

            <p className="healthPageHead">Healthcare Donation</p>

            <div className="ciInputWrapper">
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Subject/Title"
                            value={hTitle}
                            onChange={(e) => sethTitle(e.target.value)}
                        />
                    </div>


                    <div>
                        <input
                            type="text"
                            placeholder="Enter Addres of the Location"
                            value={hAddress}
                            onChange={(e) => sethAddress(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Which City"
                            value={hCity}
                            onChange={(e) => sethCity(e.target.value)}
                        />
                    </div>

                </div>

                <div>

                    <div>
                        <textarea
                            type="text"
                            placeholder="Description of the drive"
                            value={hDesc}
                            onChange={(e) => sethDesc(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Organised by (NGO name)"
                            value={hOrg}
                            onChange={(e) => sethOrg(e.target.value)}
                        />

                        <button className="postLocationBtn" onClick={onClickPost}>Post</button>
                    </div>

                </div>

            </div>


            <div className="healthPosts">

                <div className="singleHealthPost">
                    <p className="hHead">Park Filled with Garbage near Rohini market.</p>
                    <div className="hOrgName">
                        <p>Fund Raiser Stared By:  Vrikshit Foundation Delhi</p>
                        <p className="donate">Donate ₹</p>
                    </div>
                    <p className="hDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>

                    <div className="hAddressInterest">
                        <p className="hAddress">Address: Block C Market Road 110054</p>
                        <div>
                            <p>₹5000 raised</p>
                        </div>

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

export default VolHealthcare

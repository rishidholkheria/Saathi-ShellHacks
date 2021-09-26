import React, { useState } from 'react'
import { ToastProvider, useToasts } from "react-toast-notifications";
import { database } from "../../firebase";
import "./VolFoodBooks.css"

const VolFoodBooks = () => {
    const [fbTitle, setFbTitle] = useState("");
    const [fbDesc, setFbDesc] = useState("");
    const [fbCity, setFbCity] = useState("");
    const [fbAddress, setFbAddress] = useState("");
    const [fbOrg, setFbOrg] = useState("");
    const { addToast } = useToasts();

    const onClickPost = () => {
        const nTitle = fbTitle;
        const nDesc = fbDesc;
        const nCity = fbCity;
        const nAddress = fbAddress;
        const nOrg = fbOrg;
        const id = localStorage.getItem("SAATHI_ID");
        const date = new Date().toLocaleString() + ""

        database
            .ref("food_books")
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
        setFbAddress("")
        setFbDesc("")
        setFbTitle("")
        setFbCity("")
        setFbOrg("")
    };

    return (
        <div className="volunteerPage">

            <p className="fbPageHead">Food & Books Drives</p>
            <div className="addNewLocation">
                <p>What's on your mind?</p>

                <div className="ciInputWrapper">

                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Subject/Title"
                                value={fbTitle}
                                onChange={(e) => setFbTitle(e.target.value)}
                            />
                        </div>


                        <div>
                            <input
                                type="text"
                                placeholder="Enter Addres of the Location"
                                value={fbAddress}
                                onChange={(e) => setFbAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Which City"
                                value={fbCity}
                                onChange={(e) => setFbCity(e.target.value)}
                            />
                        </div>

                    </div>

                    <div>

                        <div>
                            <textarea
                                type="text"
                                placeholder="Description of the drive"
                                value={fbDesc}
                                onChange={(e) => setFbDesc(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Organised by (NGO name)"
                                value={fbOrg}
                                onChange={(e) => setFbOrg(e.target.value)}
                            />

                            <button className="postLocationBtn" onClick={onClickPost}>Post</button>
                        </div>

                    </div>

                </div>

                <div>
                </div>
            </div>
            <div className="fbPosts">

                <div className="singleFbPost">
                    <p className="fbHead">Park Filled with Garbage near Rohini market.</p>
                    <p className="fbOrgName">Organised By:  Vrikshit Foundation Delhi</p>
                    <p className="fbDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>

                    <div className="fbAddressInterest">
                        <p className="fbAddress">Address: Block C Market Road 110054</p>
                        <div>
                            <i class="far fa-star fa-lg"></i>
                            <p>100 people interested</p>
                        </div>

                    </div>

                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                </div>

                <div className="singleFbPost">
                    <p className="fbHead">Park Filled with Garbage near Rohini market.</p>
                    <p className="fbOrgName">Organised By:  Vrikshit Foundation Delhi</p>
                    <p className="fbDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>

                    <div className="fbAddressInterest">
                        <p className="fbAddress">Address: Block C Market Road 110054</p>
                        <div>
                            <i class="far fa-star fa-lg"></i>
                            <p>100 people interested</p>
                        </div>

                    </div>

                    <div className="locDateCity">
                        <p>12 Jan 2021</p>
                        <p>New Delhi</p>
                    </div>
                </div>

                <div className="singleFbPost">
                    <p className="fbHead">Park Filled with Garbage near Rohini market.</p>
                    <p className="fbOrgName">Organised By:  Vrikshit Foundation Delhi</p>
                    <p className="fbDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quibusdam vel asperiores illum dolorem sunt beatae atque esse aliquid possimus totam, quam, numquam aliquam quos earum voluptate dolor ipsa velit?</p>

                    <div className="fbAddressInterest">
                        <p className="fbAddress">Address: Block C Market Road 110054</p>
                        <div>
                            <i class="far fa-star fa-lg"></i>
                            <p>100 people interested</p>
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

export default VolFoodBooks

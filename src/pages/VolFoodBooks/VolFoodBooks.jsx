import React, { useState, useEffect } from 'react'
import { ToastProvider, useToasts } from "react-toast-notifications";
import { database } from "../../firebase";
import "./VolFoodBooks.css"
import SingleFbPost from "./SingleFbPost";

const VolFoodBooks = () => {
    const [fbTitle, setFbTitle] = useState("");
    const [fbDesc, setFbDesc] = useState("");
    const [fbCity, setFbCity] = useState("");
    const [fbAddress, setFbAddress] = useState("");
    const [fbOrg, setFbOrg] = useState("");
    const [fbPosts, setFbPosts] = useState([]);
    const { addToast } = useToasts();

    var childData = [];

    var myData = [];

    // useEffect(() => {
    //     var temp = database.ref('users/').once("value").then((snapshot) => {
    //         snapshot.forEach(function (childSnapshot) {
    //             var cdata = childSnapshot.val();
    //             myData.push(cdata)
    //         });
    //     })

    //     const id = localStorage.getItem("SAATHI_ID")

    //     const newArray = []
    //     console.log(myData)

    //     for (let i = 0; i < myData.length; i++) {
    //         var data = myData[i].userId;
    //         console.log(data)
    //         // if (myData[i].userId === localStorage.getItem("SAATHI_ID")) {
    //         //     newArray.push(myData[i].userType);
    //         // }
    //     }
    //     console.log("new array" + newArray)
    //     console.log("hiiiiiiiiiii")
    // }, [])

    useEffect(() => {
        var temp = database.ref('food_books/').once("value").then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var cdata = childSnapshot.val();
                childData.push(cdata)
            });
            console.log(childData)
            setFbPosts(childData)
        })
    }, [])


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
            <div className="locationsList">
                {/* {console.log(posts)} */}
                {
                    [...fbPosts]
                        .map((post) => (
                            <SingleFbPost
                                title={post.title}
                                description={post.desc}
                                address={post.address}
                                imageUrl={post.imgUrl}
                                city={post.city}
                                date={post.date}
                            />
                        ))
                }

            </div>
        </div>
    )
}

export default VolFoodBooks

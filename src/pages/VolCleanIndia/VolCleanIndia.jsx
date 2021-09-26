import React, { useState, useEffect } from 'react'
import "./VolCleanIndia.css"
import { database, storage } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider, useToasts } from "react-toast-notifications";
import SingleCiPost from './SingleCiPost';

const Volunteer = () => {
    var globalImg = {};
    const [cITitle, setCiTitle] = useState("");
    const [cIDesc, setCiDesc] = useState("");
    const [cICity, setCiCity] = useState("");
    const [cIAddress, setCiAddress] = useState("");
    const [cIImageFile, setCiImageFile] = useState("");
    const [posts, setPosts] = useState([]);
    const [img, setImg] = useState({});

    const { addToast } = useToasts();

    var childData = [];

    useEffect(() => {
        var temp = database.ref('posts/').once("value").then((snapshot) => {
            // const data = snapshot.val();
            // console.log(data)
            // setPosts(temp)
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var cdata = childSnapshot.val();
                childData.push(cdata)
            });
            console.log(childData)
            setPosts(childData)
        })
    }, [])



    // setMyData(temp)
    // console.log(mydata)


    // console.log(cIImageFile)
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setCiImageFile(imageFile => (image))
    }

    const handleImageUpload = () => {
        //error handling
        if (cIImageFile === '') {
            console.log(`not an image, the image file is a ${typeof (cIImageFile)}`)
        }

        const uploadImage = storage.ref(`/images/${cIImageFile.name}`).put(cIImageFile);

        uploadImage.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(cIImageFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        // setCiImageUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                        globalImg = fireBaseUrl
                        localStorage.setItem("Image", fireBaseUrl) // Temporary solution
                    })
            });
    }


    const onClickPost = () => {
        const nTitle = cITitle;
        const nDesc = cIDesc;
        const nCity = cICity;
        const nAddress = cIAddress;
        const id = localStorage.getItem("SAATHI_ID");
        const date = new Date().toLocaleString() + ""

        handleImageUpload();
        database
            .ref("posts")
            .push({
                title: nTitle,
                desc: nDesc,
                address: nAddress,
                city: nCity,
                uId: id,
                date: date,
                imgUrl: localStorage.getItem("Image"),
                status: "pending"
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
        setCiImageFile("")
    };


    return (
        <div className="volunteerPage">
            <p className="ciPageHead">Clean India</p>

            <div className="addNewLocation">
                <p>What's on your mind?</p>

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
                                onChange={handleImageAsFile}
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
                    [...posts]
                        .map((post) => (
                            <SingleCiPost
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

export default Volunteer
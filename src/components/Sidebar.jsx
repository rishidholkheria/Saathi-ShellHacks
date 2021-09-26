import React, { useState, useEffect } from 'react'
import { database, storage } from "../firebase";
import "./Sidebar.css"
import Pending from './Pending'
import Verified from './Verified'


const Sidebar = () => {
    const [posts, setPosts] = useState([]);

    var childData = [];

    useEffect(() => {
        var temp = database.ref('posts/').once("value").then((snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var cdata = childSnapshot.val();
                childData.push(cdata)
            });
            console.log(childData)
            setPosts(childData)
        })
    }, [])

    return (
        <div className="sidebar">

            <div className="introColumn">
                <p className="introColumnContent">NGOs</p>
                <p className="introColumnContent">Govt Organisations</p>
                <p className="introColumnContent">About Saathi</p>
            </div>

            <div className="work">
                <p className="workStatusHead">Pending Work</p>
                {
                    [...posts].filter(post => post.status === "pending")
                        .map((post) => {
                            return (
                                <Pending
                                    pending={post.title} />
                            );
                        })
                }

                <p className="workStatusHead">Verified Work</p>
                {
                    [...posts].filter(post => post.status === "verified")
                        .map((post) => {
                            return (
                                <Verified
                                    verified={post.title} />
                            );
                        })
                }
            </div>

            {/* <div className="work">
                <p className="workStatusHead">Pending Work</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>

                <p className="workStatusHead">Verified Work</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
            </div> */}

        </div >
    )
}

export default Sidebar

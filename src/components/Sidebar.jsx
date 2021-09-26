import React, { useState, useEffect } from 'react'
import { database, storage } from "../firebase";
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import { SidebarData, SideBarPathIndex } from './SidebarData';
import Pending from './Pending'
import Verified from './Verified'


const Sidebar = () => {
    const [posts, setPosts] = useState([]);
    const [selectedOption, setSelectedOption] = React.useState(SideBarPathIndex[window.location.pathname]);
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

            {SidebarData.map((item, index) => {
                return (<div className="introColumn">
                    <Link key={index} to={item.path} onClick={() => {
                        setSelectedOption(index);
                    }}>
                        <div className={selectedOption === index ? item.cName + ' active' : item.cName}>
                            {/* <i className={item.icon} id="option_icon"></i> */}
                            <p>{item.option_name}</p>
                        </div>
                    </Link>
                </div>)
            })}

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

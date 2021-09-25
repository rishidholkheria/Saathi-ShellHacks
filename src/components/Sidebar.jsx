import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="introColumn">
                <p className="introColumnContent">NGOs</p>
                <p className="introColumnContent">Govt Organisations</p>
                <p className="introColumnContent">About Saathi</p>
            </div>

            <div className="work">
                <p className="workStatusHead">Pending Work</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>
                <p className="pendingWorkName">Back Side of Tank Road</p>

                <p className="workStatusHead">Completed Work</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
                <p className="completeWorkName">Back Side of Tank Road</p>
            </div>

        </div>
    )
}

export default Sidebar

import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <p className="navLogo">Saathi</p>

            {/* <div className="pageLinks">
                <Link to="/clean-india">
                    <SidebarOption text="Dashboard" />
                </Link>
            </div> */}
        </div>
    )
}

export default Navbar

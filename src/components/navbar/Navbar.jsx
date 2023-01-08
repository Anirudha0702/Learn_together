import { useState } from "react";
import "./navbar.scss"
const Navbar=()=>{
    const [clicked,setClick]=useState(false);
    const  handleOpen=()=>{
        setClick(!clicked);
    }
   
    return( 
        <div className="Navbar">
            <div className="logo">LearnTogether</div>
            <div className="navigation">
                <ol className={clicked?"navItemContainer clicked":"navItemContainer"}>
                    <li className="navItem">Home</li>
                    <li className="navItem">About</li>
                    <li className="navItem">Courses</li>
                    <li className="navItem">Events</li>
                    <li className="navItem">Downloads</li>
                    <li className="navItem">Contact Us</li>
                </ol>
                <button className={clicked?"hamburger clicked":"hamburger"} id="Hamburger" onClick={handleOpen}>
                    <span className="line" id="line1">&nbsp;</span>
                </button>      
            </div>
        </div>
    )}
export default Navbar;
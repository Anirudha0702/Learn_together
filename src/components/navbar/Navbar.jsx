import { useState } from "react";
import "./navbar.scss"
import profileImg from "../../Assets/people.png"
import { AccountCircle, People, SchoolSharp } from "@material-ui/icons";
const Navbar=()=>{
    const [clicked,setClick]=useState(false);
    const  handleOpen=()=>{
        setClick(!clicked);
    }
    return( 
        <div className="Navbar">
            <div className="logo">
                <SchoolSharp className="logoImg"/>
                <span className="text">Learn Together</span>
            </div>
            <div className="navItemContainer">
                <div className={clicked?"hamburgerMenu clicked":"hamburgerMenu"} onClick={handleOpen}>
                    <span className="line"></span>
                </div>
                <ol className={clicked?"navList click":"navList"}>
                    <li className="item">Home</li>
                    <li className="item">Courses</li>
                    <li className="item">About</li>
                    <li className="item">Contact Us</li>
                    <li className="item"><div className="profile"><AccountCircle className="img"/></div></li>
                </ol>
            </div>
        </div>
    )}
export default Navbar;
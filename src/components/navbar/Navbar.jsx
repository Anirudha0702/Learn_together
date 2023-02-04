import { useState } from "react";
import "./navbar.scss"
import logo from "../../Assets/logo.png"
const Navbar=()=>{
    const [clicked,setClick]=useState(false);
    const  handleOpen=()=>{
        setClick(!clicked);
    }
   
    return( 
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="" />
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
                    <li ><button className="login">Login</button></li>
                </ol>
            </div>
        </div>
    )}
export default Navbar;
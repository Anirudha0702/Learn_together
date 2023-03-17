import { useState } from "react";
import "./navbar.scss"
import profileImg from "../../Assets/people.png"
import { Link } from "react-router-dom";
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
                    <li className="item"><Link className="Link" to={"/"}>Home</Link></li>
                    <li className="item">Courses</li>
                    <li className="item"><Link className="Link" to={"/about"}>About</Link></li>
                    <li className="item">Contact Us</li>
                    <li className="item"><Link className="Link" to ={"/login"}><div className="profile"><AccountCircle className="img"/></div></Link></li>
                </ol>
            </div>
        </div>
    )}
export default Navbar;
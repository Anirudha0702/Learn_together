import { useState } from "react";
import "./navbar.scss"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import {  FaSchool } from "react-icons/fa";
import {GiHamburgerMenu,GiTireIronCross} from "react-icons/gi"


const Navbar=()=>{
    const [clicked,setClick]=useState(false);
    const  handleNavToggle=()=>{
        setClick(!clicked);
    }
    const user=useSelector(state=>state.user.user)
    return( 
        <div className="Navbar">
            <div className="logo">
                <FaSchool className="logoImg"/>
                <span className="text">Learn Together</span>
            </div>
            <div className="navItemContainer">
                <div className="hamburgerMenu" onClick={handleNavToggle}>
                    {clicked?<GiTireIronCross style={{transform:"scale(1.2)"}}/>:<GiHamburgerMenu style={{transform:"scale(1.2)"}}/>}
                </div>
                <ol className={clicked?"navList click":"navList"}>
                    <li className="item"><Link className="Link" to={"/"}>Home</Link></li>
                    <li className="item">Courses</li>
                    <li className="item"><Link className="Link" to={"/about"}>About</Link></li>
                    <li className="item">Contact Us</li>
                    <li className="item"><Link className="Link" to ="/user">
                        <div className="profile">
                        <img src={user.dp} alt="dssgv" />
                        </div>
                        </Link></li>
                </ol>
            </div>
        </div>
    )}
export default Navbar;
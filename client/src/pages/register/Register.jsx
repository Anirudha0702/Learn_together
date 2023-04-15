import {FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';

import{ToastContainer,toast} from "react-toastify"
import "./register.scss"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Register=()=>{

    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let navigate=useNavigate();
    const createUser=async ()=>{
        console.log("createUser is called");
        
        try {
            await axios.post("http://localhost:8050/api/authentication/register",{email,password,userName});
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            console.log(error)
            toast.error("Cann'tr complete the registration")
        }
    }
    return(
        <div className="Register">
            <div className="image flex_item"></div>
            <div className="Register_container flex_item">
                <div className="Register">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="" id="" placeholder="Enter Email Id" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="text" name="" id="" placeholder="Enter UserName"onChange={(e)=>{setUserName(e.target.value)}}/>

                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" name="" id="" placeholder="Enter Password"onChange={(e)=>{setPassword(e.target.value)}}/>
                    <label htmlFor="" id="rememberMe"><input type="checkbox" name="" id="chkbx" /> Remember Me</label>
                    <button className="sign_up" onClick={()=>createUser() & toast.success('Registration is Successful', {
                        position: "top-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        }) }>Sign Up</button>

                    <div className="link_conatiner">
                        <span><Link to={"/login"}>Login</Link></span>
                    </div>
                    <div className="icon_container">
                        <h6>Register With:</h6>
                        <FaFacebook className="Icon fb"/>
                        <FaInstagram className="Icon twitter"/>
                        <FaLinkedin className="Icon twitter"/>
                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
        </div>
    )
}
export default Register;
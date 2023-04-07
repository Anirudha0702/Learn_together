import {FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"

import "./login.scss"
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <div className="Login">
            <div className="image flex_item"></div>
            <div className="login_container flex_item">
                <div className="login">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="" id="" placeholder="Enter Email Id"/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" name="" id="" placeholder="Enter Password"/>
                    <label htmlFor="" id="rememberMe"><input type="checkbox" name="" id="chkbx" /> Remember Me</label>
                    <button className="sign_in">Sign In</button>

                    <div className="link_conatiner">
                        <span><Link to={"/register"}>Register</Link> </span>
                        <span>Forget password?</span>
                    </div>
                    <div className="icon_container">
                        <h6>Login With:</h6>
                        <FaFacebook className="Icon fb"/>
                        <FaInstagram className="Icon twitter"/>
                        <FaLinkedin className="Icon  twitter"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
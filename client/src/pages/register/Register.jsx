import { Facebook , LinkedIn, Person, Twitter} from "@material-ui/icons";
import "./register.scss"
import { Link } from "react-router-dom";
const Register=()=>{
    return(
        <div className="Register">
            <div className="image flex_item"></div>
            <div className="Register_container flex_item">
                <div className="Register">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="" id="" placeholder="Enter Email Id"/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" name="" id="" placeholder="Enter Password"/>
                    <label htmlFor="" id="rememberMe"><input type="checkbox" name="" id="chkbx" /> Remember Me</label>
                    <button className="sign_in">Sign Up</button>

                    <div className="link_conatiner">
                        <span><Link to={"/login"}>Login</Link></span>
                    </div>
                    <div className="icon_container">
                        <h6>Register With:</h6>
                        <Facebook className="Icon fb"/>
                        <Twitter className="Icon twitter"/>
                        <LinkedIn className="Icon twitter"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
import { Facebook , LinkedIn, Person, Twitter} from "@material-ui/icons";
import "./login.scss"

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
                        <span>Register</span>
                        <span>Forget password?</span>
                    </div>
                    <div className="icon_container">
                        <h6>Login With:</h6>
                        <Facebook className="Icon fb"/>
                        <Twitter className="Icon twitter"/>
                        <LinkedIn className="Icon twitter"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
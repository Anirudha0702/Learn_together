import { Facebook , LinkedIn, Person, Twitter} from "@material-ui/icons";
import "./login.scss"

const Login=()=>{
    return(
        <div className="Login">
            <div className="login_container">
                <label htmlFor="email"><Person className="person"/> </label>
                <input type="email" placeholder="Email" className="inpBox email"/>
                <input type="password" placeholder="Password" className="inpBox password"/>
                <label htmlFor="" id="rememberMe"><input type="checkbox" name="" id="chkbx" /> Remember Me</label>
                <button className="sign_in">Sign In</button>

                <div className="linkconatiner">
                    <span>Register</span>
                    <span>Forget password?</span>
                </div>
                <div className="icon_container">
                    <Facebook className="Icon fb"/>
                    <Twitter className="Icon twitter"/>
                    <LinkedIn className="Icon twitter"/>
                </div>
            </div>
        </div>
    )
}
export default Login;
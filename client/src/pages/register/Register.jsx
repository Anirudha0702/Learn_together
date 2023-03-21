import  "./register.scss"
import { Facebook , LinkedIn, Twitter} from "@material-ui/icons";

const Register=()=>{
    return (
        <div className="Register">
           <div className="Register_container">
                <input type="email" placeholder="Email" className="inpBox email"/>
                <div className="phoneNo">
                <input type="text" name="" id="" className="inpBox countryCode" placeholder="+91"/>
                <input type="text" name="" id="" inputMode="numeric" className="inpBox phone" placeholder="Phone"/>
                </div>
                <input type="password" placeholder="Password" className="inpBox password"/>
                <button className="sign_up">Sign Up</button>
                <span>Already have an account?<span>Login</span></span>
            
                <div className="icon_container">
                    <Facebook className="Icon fb"/>
                    <Twitter className="Icon twitter"/>
                    <LinkedIn className="Icon twitter"/>
                </div>
           </div>
        </div>
    )
}
export default Register;
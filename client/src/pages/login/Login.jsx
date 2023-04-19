import {FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"
import {useState} from "react"
import "./login.scss"
import { Link ,useNavigate} from "react-router-dom";
import{ToastContainer,toast} from "react-toastify"
import {findUser} from "../../API"
const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
        const found=findUser({password,email});
        if(found){
            toast.success('logged in..');
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
        else{
            toast.error("Faild to login ");
        }
    }
    return(
        <div className="Login">
            <div className="image flex_item"></div>
            <div className="login_container flex_item">
                <div className="login">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="" placeholder="Enter Email Id" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" name=""  placeholder="Enter Password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <button className="sign_in" onClick={handleLogin}>Sign In</button>

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
            <ToastContainer
            position="top-left"
            autoClose={2000}
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
export default Login;
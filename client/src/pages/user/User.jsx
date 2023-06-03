
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./user.scss";
import { useDispatch } from "react-redux";
import { setUser } from "../../State/Slice";
import {BsFillGearFill} from "react-icons/bs";
import { useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
const User=()=>{
    // const courseArray=array;
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user_obj=useSelector(state=>state.user.user);
    const HandelLogout=()=>{
        localStorage.removeItem("User");
        
        dispatch(setUser(null));
        navigate("/")
    }
    return(
        <div className="User">
            <div className="nav-wrapper">
                <Navbar/>
                <div className="user-wrapper">
                    <div className="dp-wrapper">
                        <img src={user_obj.dp} alt="" />
                    </div>
                    <h3><Link style={{color:"#fff"}}to={"/setting"}>{user_obj.user} <BsFillGearFill  style={{cursor:"pointer"}}/></Link></h3>
                    <span>{user_obj.email}</span>
                    <button type="submit" onClick={HandelLogout}>Logout</button>
                </div>
            </div>
            <div className="cover-bg">
            </div>
            <Footer/>
	    </div>
    )
}
export default User;
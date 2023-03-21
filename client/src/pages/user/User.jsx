import Navbar from "../../components/navbar/Navbar";
import "./user.scss";
import profile from "../../Assets/MYiMG.jpeg";
import cover from "../../Assets/registerBg.jpg"
import {AiTwotoneEdit} from "react-icons/ai";
import {MdAddAPhoto} from "react-icons/md";
const User=()=>{
    // const course=API();
    return(
        <div className="User">
            <div className="cover">
                <Navbar/>
                <div className="coverImg">
                    <img src={cover} alt="" />
                    <MdAddAPhoto className="addCvr"/>
                </div>
            </div>
            <div className="userContainer">
                <div className="userInfo">
                    <div className="details">
                        <h1>Anirudha Pradhan <AiTwotoneEdit/></h1>
                        <span>anirudhapradhan403@gmail.com</span>
                        <span><h3>Bio</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet laborum deleniti excepturi voluptatem illum ipsum qui totam dolore animi delectus consequatur aliquam, quo sequi fugiat reiciendis soluta sunt iure!</span>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
	    </div>
    )
}
export default User;
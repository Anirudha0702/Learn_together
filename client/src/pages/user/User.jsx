
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./user.scss";
import profile from "../../Assets/MYiMG.jpeg";
import {AiTwotoneEdit} from "react-icons/ai";
import API from "../../API";
const User=()=>{
    const courseArray=API();
    return(
        <div className="User">
            <div className="cover">
                <Navbar/>
                {/* <div className="coverImg">
                    <img src={cover} alt="" />
                    <MdAddAPhoto className="addCvr"/>
                </div> */}
            </div>
            <div className="userContainer">
                <div className="userInfo">
                    <div className="profile">
                        <img src={profile} alt="" />
                    </div>
                    <div className="details">
                        <h3>Anirudha Pradhan <AiTwotoneEdit/></h3>
                        <span>anirudhapradhan403@gmail.com</span>
                        <span><h3>Bio</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet laborum deleniti excepturi voluptatem illum ipsum qui totam dolore animi delectus consequatur aliquam, quo sequi fugiat reiciendis soluta sunt iure!</span>
                    </div>
                </div>
                <div className="coursesIn">
                    {
                        courseArray.map((course,key)=>{
                            return(
                                <div className="course">
                                    <div className="img">
                                        <img src={course.image} alt="" />
                                    </div>
                                    <span>{course.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
	    </div>
    )
}
export default User;
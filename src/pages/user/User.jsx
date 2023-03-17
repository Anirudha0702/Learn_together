import Navbar from "../../components/navbar/Navbar";
import "./user.scss"
import logo from "../../Assets/loginBg.jpg"
import {AiTwotoneEdit} from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import API from "../../api/API";
const User=()=>{
    const course=API();
    return(
        <>
        <div className="User">
           <div className="navContainer">
           <Navbar/>
           </div>
           <section>
           <div className="user_container">
                <div className="userInfo">
                    <div className="U_Img">
                        <img src={logo} alt="" />
                    </div>
                    <span className="name">Anirudha Pradhan <AiTwotoneEdit className="edit"/></span>
                    <span className="email">anirudhapradhan403@gmail.com</span>
                    <p className="bio"><span>Bio</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad nostrum dignissimos tempore obcaecati exercitationem assumenda cupiditate ab commodi officia!
                    </p>
                    <p className="education"><span>Education</span>University Of Calcutta
                    </p>            
                </div>

            </div>
            <div className="courses">
                <h3 className="course">Courses you are in</h3>   
            </div>
            </section>
        </div>
        <Footer/>
        </>
    )
}
export default User;
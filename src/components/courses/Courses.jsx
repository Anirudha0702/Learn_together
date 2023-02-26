
import { AccountBalance, CodeOutlined, LocalHospitalOutlined, MenuBookOutlined, SchoolOutlined } from "@material-ui/icons";
import "./courses.scss"
const Courses=()=>{
    return(
        <div className="Courses">
            <div className="heading">
                <div className="flxitm"> <MenuBookOutlined className="book"/><span>Our Courses</span></div>
                <button className="btn flxitm">View All Courses</button>
            </div>
            <div className="course--container">
                <div className="courseList">
                    <div className="subject">
                        <LocalHospitalOutlined className="Icon"/>
                        NEET</div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat. Lorem ipsum 
                        <button className="btn">Study</button>
                    </div>
                </div>
                <div className="courseList">
                    <div className="subject">
                        <AccountBalance className="Icon"/>
                        CA</div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat. Lorem ipsum 
                        <button className="btn">Study</button>
                    </div>
                </div>
                <div className="courseList">
                    <div className="subject">
                        <SchoolOutlined className="Icon"/>
                        BOARD EXAMS</div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat. Lorem ipsum 
                        <button className="btn">Study</button>
                    </div>
                </div>
                <div className="courseList">
                    <div className="subject">
                        <CodeOutlined className="Icon"/>
                        IIT/JEE/MAINS</div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat. Lorem ipsum
                        <button className="btn">Study</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses;
import {AiFillMail} from "react-icons/ai"
import {ImLocation2} from "react-icons/im"
import {IoMdCall} from "react-icons/io"
import {FaQuoteLeft,FaQuoteRight,FaCopyright,FaSchool,FaGithub,FaFacebook,FaLinkedin,FaInstagram} from "react-icons/fa"
import "./footer.scss"
const Footer=()=>{
    return(
        <div className="Footer">
            <div className="quote">
                <span><FaQuoteLeft/>  It is the mark of an educated mind to be able to entertain a thought without accepting it <FaQuoteRight/></span>
                <button className="btn">View All Courses</button>
            </div>
            <div className="container">
                <div className="SiteDetails_Container">
                    <div className="info grid_Item">
                        <div className="logo">
                        <FaSchool className="logoImg"/>
                        <span className="text">Learn Together</span></div>
                        <span>
                        Established in the year 1995,Solid Tuition has been instrumental in numerous success stories. Tuition classes are really helpful for students to overcome their weaknesses .
                        </span>
                    </div>
                    <div className="contact grid_Item">
                        <h3>Contact:</h3>
                        <span><ImLocation2 className="Icon"/>Purba Putiary, Kolkata, West Bengal</span>
                        <span><AiFillMail className="Icon"/>anurudhapradhan403@gmail.com</span>
                        <span><IoMdCall className="Icon"/>7044585997</span>
                    </div>
                    <div className="feedback grid_Item">
                        <h3>Feedback:</h3>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write feedback"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div className="developerDetails_Container">
                    <a href="https://github.com/Anirudha0702https://github.com/Anirudha0702"><FaFacebook className="Icon"/></a>
                    <a href="https://www.linkedin.com/in/anirudha-pradhan-346388240/"><FaLinkedin className="Icon"/></a>
                    <a href="https://github.com/Anirudha0702"><FaGithub className="Icon"/></a>
                    <a href="https://github.com/Anirudha0702"><FaInstagram className="Icon"/></a>
                </div>
                <div className="copyright">
                   
                    <small> <FaCopyright/>Copyright <b> 2022-2030</b> All Rights Reserved. Created By <b>Anirudha pradhan</b></small>
                </div>
            </div>
        </div>
    )
}
export default Footer;
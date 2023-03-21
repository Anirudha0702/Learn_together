import { SchoolSharp,Copyright, Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, Place } from "@material-ui/icons";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
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
                        <SchoolSharp className="logoImg"/>
                        <span className="text">Learn Together</span></div>
                        <span>
                        Established in the year 1995,Solid Tuition has been instrumental in numerous success stories. Tuition classes are really helpful for students to overcome their weaknesses .
                        </span>
                    </div>
                    <div className="contact grid_Item">
                        <h3>Contact:</h3>
                        <span><Place className="Icon"/>Purba Putiary, Kolkata, West Bengal</span>
                        <span><Mail className="Icon"/>anurudhapradhan403@gmail.com</span>
                        <span><Phone className="Icon"/>7044585997</span>
                    </div>
                    <div className="feedback grid_Item">
                        <h3>Feedback:</h3>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write feedback"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </div>
                <div className="developerDetails_Container">
                    <a href="https://github.com/Anirudha0702https://github.com/Anirudha0702"><Facebook className="Icon"/></a>
                    <a href="https://www.linkedin.com/in/anirudha-pradhan-346388240/"><LinkedIn className="Icon"/></a>
                    <a href="https://github.com/Anirudha0702"><GitHub className="Icon"/></a>
                    <a href="https://github.com/Anirudha0702"><Instagram className="Icon"/></a>
                </div>
                <div className="copyright">
                   
                    <small> <Copyright/>Copyright <b> 2022-2030</b> All Rights Reserved. Created By <b>Anirudha pradhan</b></small>
                </div>
            </div>
        </div>
    )
}
export default Footer;
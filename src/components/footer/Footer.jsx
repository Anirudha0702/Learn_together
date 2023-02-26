import { Copyright, Facebook, GitHub, Instagram, LinkedIn, Mail, Phone, Place } from "@material-ui/icons";
import "./footer.scss"
import logo from "../../Assets/logo.png"
const Footer=()=>{
    return(
        <div className="Footer">
            <div className="container">
                <div className="logo flx">
                    <img src={logo} alt="" />
                    <span className="text">Learn Together</span><br></br>
                    Established in the year 1995,Solid Tuition has been instrumental in numerous success stories. Tuition classes are really helpful for students to overcome their weaknesses .
            </div>
                <div className="contact flx">
                    <h3>Contact:</h3>
                    <Place className="Icon"/>Purba Putiary, Kolkata, West Bengal
                    <Mail className="Icon"/>anurudhapradhan403@gmail.com
                    <Phone className="Icon"/>7044585997
                </div>
                <div className="feedback flx">
                    <h3>Feedback:</h3>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Write feedback"></textarea>
                    <button type="submit">Submit</button>
                </div>
            </div>
            <div className="linkContainer">
                <Facebook className="Icon"/>
                <LinkedIn className="Icon"/>
                <GitHub className="Icon"/>
                <Instagram className="Icon"/>
            </div>
            <span><Copyright/> Copyright <b> 2022-2030</b></span>
            <small>All Rights Reserved. Created By <b>Anirudha pradhan</b></small>

        </div>
    )
}
export default Footer;
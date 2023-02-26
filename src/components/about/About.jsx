import { EmojiEvents, MenuBook, Person, School } from "@material-ui/icons";
import "./about.scss"
const About=()=>{
    return(
        <div className="About">
            <div className="flexItem"><School className="Icon"/>
            265+ Satisfied Students
            </div>
            <div className="flexItem"><Person className="Icon"/>
            20+ Teachers
            </div>
            <div className="flexItem"><EmojiEvents className="Icon"/>
            8 Awards
            </div>
            <div className="flexItem"><MenuBook className="Icon"/>
            30+ Courses Available
            </div>
        </div>
    )
}
export default About;
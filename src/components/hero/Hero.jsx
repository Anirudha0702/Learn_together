
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import "./hero.scss";
import img from "../../Assets/slider-1.jpg"
const Hero=()=>{

    
    
    return(
        <div className="Hero">
            <ArrowLeftOutlined className="Arrow left"/>
            <ArrowRightOutlined className="Arrow right"/>
            <img src={img} alt="" />
        </div>
    )
}
export default Hero;
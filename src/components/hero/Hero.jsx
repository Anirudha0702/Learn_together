
import { ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import "./hero.scss"

const Hero=()=>{
    return(
        <div className="Hero">
            <ArrowLeftOutlined className="Arrow left"/>
            <ArrowRightOutlined className="Arrow right"/>
        </div>
    )
}
export default Hero;
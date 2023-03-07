import Cover from "../../components/cover/Cover"
import Widget_container from "../../components/widget_container/Widget_container";
import "./home.scss"
const Home=()=>{
    return(
        <div className="Home">
          <Cover/>
          <Widget_container/>
        </div>
    )
}
export default Home;
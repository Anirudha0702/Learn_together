import Cover from "../../components/cover/Cover"
import List from "../../components/list/List";
import Widget_container from "../../components/widget_container/Widget_container";
// import Login from "../login/Login";
import "./home.scss"
const Home=()=>{
    return(
        <div className="Home">
          <Cover/>
          <Widget_container/>
          <List/>
         
        </div>
    )
}
export default Home;
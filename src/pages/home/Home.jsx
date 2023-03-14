import Cover from "../../components/cover/Cover"
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Testimonial from "../../components/testimonial/Testimonial";
import Widget_container from "../../components/widget_container/Widget_container";
// import Login from "../login/Login";
import "./home.scss"
const Home=()=>{
    return(
        <div className="Home">
          <Cover/>
          <Widget_container/>
          <List/>
          <Testimonial/>
          <Footer/>
        </div>
    )
}
export default Home;
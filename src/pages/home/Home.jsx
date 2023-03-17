import Cover from "../../components/cover/Cover"
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Testimonial from "../../components/testimonial/Testimonial";
import Widget_container from "../../components/widget_container/Widget_container";
import API from "../../api/API";
import "./home.scss"
const Home=()=>{
  const course= API().slice(0,3);
    return(
        <div className="Home">
          <Cover/>
          <Widget_container/>
          <h3 className="course">Our Most Popular Courses</h3>
          <List course={course}/>
          <Testimonial/>
          <Footer/>
        </div>
    )
}
export default Home;
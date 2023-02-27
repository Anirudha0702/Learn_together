import About from "../../components/about/About";
import Courses from "../../components/courses/Courses";
import Cover from "../../components/cover/Cover";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Testimonial from "../../components/testimonial/Testimonial";
//import Login from "../login/Login"
//import Register from "../register/Register";
import "./home.scss"
const Home=()=>{
    return(
        <div className="Home">
          <Navbar/>
          <Cover/>
          <Courses/>
          <About/>
          <Testimonial/>
          <Footer/>
        </div>
    )
}
export default Home;
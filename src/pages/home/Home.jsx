import About from "../../components/about/About";
import Cover from "../../components/cover/Cover";
import Navbar from "../../components/navbar/Navbar";

import "./home.scss"
const Home=()=>{
    return(
        <div className="Home">
          {/* <Navbar/>
          <Cover/> */}
          <About/>
        </div>
    )
}
export default Home;
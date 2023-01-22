import Cover from "../../components/cover/Cover";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss"

const Home=()=>{
    return(
        <div className="Home">
          <Navbar></Navbar>  
          <Cover/>
        </div>
    )
}
export default Home;
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Testimonial from "../../components/testimonial/Testimonial";
import "./about.scss"
const About=()=>{
    return(
        <div className="About">
            <div className="headingSection">
                <Navbar/>
                <div className="headingContainer">
                    <h1 className="heading">
                    About Us</h1>
                    <div className="subHeading">Learn Together is a comprehensive digital space that offers a wide range of courses and resources to learners around the world. Our platform is designed to make learning more accessible, flexible, and engaging.</div>
                </div>
            </div>
            <div className="aboutDetails_container">
                <div className="img_Container flex">
                    <div className="img">
                    <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-1-free-img.jpg" alt="Lisa Green-CMO" />
                    <div className="info">Lisa Green-CMO</div>
                    </div>
                    <div className="img">
                    <img src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-2-free-img.jpg" alt="Dr. John Smith — Founder & CEO." />
                    <div className="info">Dr. John Smith — Founder & CEO.</div>
                    </div>
                </div>
                <div className="ourStory flex">
                    <h3>Our Story</h3>
                    <span>The journey of an e-learning platform typically begins with the identification of a need for a new or improved learning tool. This could be driven by a number of factors such as changes in technology, evolving pedagogical approaches, or shifting market demand. Once the need is identified, a team of developers and educators will typically come together to plan and design the platform.
                    During the planning phase, the team will determine the platform's target audience, identify key features and functionalities, and create a rough prototype or wireframe of the platform. This prototype will then be tested and refined through a process of user feedback and iteration.</span>

                </div>
            </div>
            <Testimonial/>
            <Footer/>
        </div>
    )
}
export default About;
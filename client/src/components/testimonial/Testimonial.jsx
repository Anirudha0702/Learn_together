import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
import "./testimonial.scss"
const Testimonial=()=>{
    const review=[
        {
          name: "John Smith",
          occupation: "Marketing Manager",
          company: "ABC Corporation",
          text: "I was blown away by the quality of service and professionalism shown by this company. They went above and beyond to meet our needs and exceeded our expectations. Highly recommend!",
          image: "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
        },
        {
          name: "Sarah Johnson",
          occupation: "Entrepreneur",
          company: "Johnson Enterprises",
          text: "I've worked with many service providers over the years, but this team truly stands out. They are incredibly knowledgeable and always put their clients first. I will definitely be working with them again in the future.",
          image: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        },
        {
          name: "David Lee",
          occupation: "Small Business Owner",
          company: "Lee's Auto Repair",
          text: "I've been using this company's services for years and have never been disappointed. They are reliable, efficient, and always get the job done right. I highly recommend them to anyone in need of their services.",
          image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w="
        },
        {
          name: "Emily Davis",
          occupation: "Graphic Designer",
          company: "Davis Design Studio",
          text: "I recently worked with this company on a design project and was blown away by their creativity and attention to detail. They truly understand their clients' needs and are able to bring their vision to life. Highly recommend!",
          image: "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        }
      ]
      
    return(
        <>
        {/* <h3 className="course">What Our Students Have to Say</h3> */}
        <div className="Testimonial">
            <h3 className="course">What Our Students Have to Say</h3>
            <div className="review_Container">
            {
                review.map((object,key)=>{
                    return(
                        <div className="review" key={key}>
                            <div className="comment">
                            <FaQuoteLeft className="sign"/>
                            {object.text.length>150?object.text.substring(0,150)+"...":object.text}
                            <FaQuoteRight className="sign"/>
                            </div>
                            <div className="user_Details">
                                <div className="userimg">
                                    <img src={object.image} alt={object.name} />
                                </div>
                                <div className="info">
                                    <span><b>{object.name}</b></span><br/>
                                    <span><small>{object.occupation},{object.company}</small></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
export default Testimonial;
import { ArrowBack, ArrowForward, FormatQuote } from "@material-ui/icons";
import logo from "../../Assets/loginBg.jpg"
import { useState } from "react";
import "./testimonial.scss"
const Testimonial=()=>{
    const [index,setIndex]=useState(0);
    const testimonials = [
        {
          name: "Jane Doe",
          text: "This is the best service I've ever used."
        },
        {
          name: "Bob Johnson",
          text: "After trying this product I was blown away"
        } 
      ];
      const changeTestimonial=(prop)=>{
        if(index+prop>(testimonials.length-1)){
            setIndex(0);
        }
        else if(index+prop<0){
            setIndex(testimonials.length-1);
        }
        else{
            setIndex(index+prop);
        }
    }
    return(
        <div className="Testimonial">
            <span className="heading">Testimonials</span>
            <div className="testimonial__container">
            {
                testimonials.map((item)=>{
                    return(
                        <>
                        
                        <div className="testimonial--display">
                        <div className="image">
                            <img src={logo} alt="" />
                        </div>
                <h4><FormatQuote/>{item.text}<FormatQuote/></h4>
                <h6>-{item.name}</h6>
            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Testimonial;
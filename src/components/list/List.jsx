import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import "./list.scss"
const List=({course})=>{
    return(
        <div className="List">
            {
                course.map((course,key)=>{
                    return(
                        <div className="Courses">
                <div className="Course_Img"><img src={course.image} alt="" /></div>
                <h3 className="CourseName">{course.title}</h3>
                <p className="details">{course.description}</p>
                <button className="More">See more</button>
            </div>
                    )
                })
            }
        </div>
    )
}
export default List;
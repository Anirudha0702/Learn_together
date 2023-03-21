
import { Extension, LocalLibrary, QuestionAnswerRounded } from "@material-ui/icons";
import "./widget_container.scss"
const Widget_container=()=>{
    return(
        <div className="Widget_container">
            <div className="Widget"><LocalLibrary className="Icon"/><h3>E-Library</h3>
            <p>There is no friend as loyal as a book</p></div>
            <div className="Widget"><Extension className="Icon"/><h3>Interesting Quizzes</h3>
            <p>Know how much you've learned</p></div>
            <div className="Widget"><QuestionAnswerRounded className="Icon"/><h3>One on One Communication</h3><p>Healthy communication makes learning easier</p></div>
        </div>
    )
}
export default Widget_container;
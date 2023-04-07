import {MdLocalLibrary,MdExtension} from "react-icons/md"
import {IoMdChatbubbles} from "react-icons/io"
import "./widget_container.scss"
const Widget_container=()=>{
    return(
        <div className="Widget_container">
            <div className="Widget"><MdLocalLibrary className="Icon"/><h3>E-Library</h3>
            <p>There is no friend as loyal as a book</p></div>
            <div className="Widget"><MdExtension className="Icon"/><h3>Interesting Quizzes</h3>
            <p>Know how much you've learned</p></div>
            <div className="Widget"><IoMdChatbubbles className="Icon"/><h3>One on One Communication</h3><p>Healthy communication makes learning easier</p></div>
        </div>
    )
}
export default Widget_container;
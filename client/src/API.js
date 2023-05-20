import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./State/Slice";

//array must be  be replaced
export const array=[ 
    {
        "title":"Social Media Marketing",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://buffer.com/library/content/images/library/wp-content/uploads/2016/11/37-Free-Online-Marketing-and-Social-Media-Classes.jpg"
    },
    {
        "title":"Email Marketing Strategies",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img.jpg"
    },
    {
        "title":"Content Marketing",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2016/12/course-3-free-img-400x223.jpg"
    },
    {
        "title":"Social Media Marketing",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://buffer.com/library/content/images/library/wp-content/uploads/2016/11/37-Free-Online-Marketing-and-Social-Media-Classes.jpg"
    },
    {
        "title":"Email Marketing Strategies",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/course-2-free-img.jpg"
    },
    {
        "title":"Content Marketing",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque porta.",
        "image":"https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2016/12/course-3-free-img-400x223.jpg"
    }
]


export const createUser=async (user)=>{
    try {
        await axios.post(`${process.env.REACT_APP_API}/register`,user);
        return true;
        
    } catch (error) {
        console.log(`got this error :(\n ${error.message}`)
       return false;
    }
}
export const findUser=async(_user)=>{

    try {
        const user= await axios.post(`http://192.168.43.85:8050/api/authentication/login`,_user);
        localStorage.setItem("User",JSON.stringify(user.data)); 
        console.log("hello")       
        return user.data;
    } 
    catch (error) {
        console.log(`got this error:(\n ${error.message}`)
    }
}
export const LogOut=()=>{
    localStorage.removeItem("User");
    const dispatch=useDispatch();
    dispatch(setUser(null));
}
import axios from "axios";

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
    console.log("createUser is called");
    try {
    
        await axios.post(import.meta.env.API+"/register",user);
        return true;
        
    } catch (error) {
       return false;
    }
}
export const findUser=async(_user)=>{
    try {
        const user= await axios.post("http://localhost:8050/api/authentication"+"/login",_user);
    localStorage.setItem("User",JSON.stringify(user.data));
    console.log(user.data);
    return true;
    } catch (error) {
        return false;
    }

}
export const logout=()=>{
    localStorage.removeItem("user");
}
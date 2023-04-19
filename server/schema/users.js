
const mongoose = require("mongoose");


const userSchema=new mongoose.Schema({
    userName:{type:String, require:true,unique:true},
    profileImg:{type:String,default:"https://picsum.photos/id/237/536/354"},
    password:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    isAdmin : {type: Boolean, default: false}
},
{timestamps : true}
)

module.exports= mongoose.model("User",userSchema);
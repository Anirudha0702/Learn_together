const router=require("express").Router();
const User=require("../schema/users")
const Crypto=require("crypto-js");


router.post("/register",async (req,res)=>{
    const NewUser=new User({
        userName:req.body.userName,
        email:req.body.email,
        password:Crypto.AES.encrypt(req.body.password,process.env.SECRET_KEY),
        isAdmin :req.body.isAdmin
    })
    try {
        const user=await NewUser.save()
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})
router.post("/login",async (req,res)=>{
    try {
    const user=  await User.findOne({email:req.body.email});
        user?res.status(200).json(user):res.status(404).json("eooro");
        console.log(user+"success");
    } catch (error) {
        res.status(500);
        console.log(error+"error");
    }
})

module.exports=router;
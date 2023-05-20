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
        console.log("success")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})
router.post("/login",async (req,res)=>{

    try {
        const user=  await User.findOne({email:req.body.email});
        !user && res.status(404).json("user not found");
        const passWord=Crypto.AES.decrypt(user.password,process.env.SECRET_KEY).toString(Crypto.enc.Utf8);
         if(req.body.password===passWord){
            res.status(201).json({
                user:user.userName,
                dp:user.profileImg,
                email:user.email
            });
         }
         else{
            res.status(401).json("Wrong password");
         }
    } catch (error) {
        res.status(500);
        console.log(error+"error");
    }
})

module.exports=router;
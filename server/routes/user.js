const router=require("express").Router();
const User=require("../schema/users")
const Crypto=require("crypto-js");

router.put("/:id",async(req,res)=>{
        if(req.body.password){
            req.body.password=Crypto.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }
        try{
            console.log(req.body);
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body},
            {new : true});
            res.status(200).json(updatedUser)
        }catch(err){
            console.log(err);
            res.status(500).json(err)
        }
        
});

module.exports=router
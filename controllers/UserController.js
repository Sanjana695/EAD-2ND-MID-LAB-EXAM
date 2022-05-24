const User=require("../models/UserSchema");
const path=require("path");
const create=(req,res)=>{
    console.log(req.body);
    res.render("register");
}

const signup=(req,res)=>{
    console.log(req.body);
    const img=req.files.pic;
    img.mv(path.resolve(__dirname,"public/img",img.name),(err)=>{
User.create({...req.body,pic:img.name}, function(err,user){
    if(err){
        // console.log(err);
        return res.redirect("/register")
    }
    console.log(user);
    res.redirect("/userList");
})
})
}

const getUser=async(req,res)=>{
    console.log(req.body);
    const users= await User.find();
    console.log(users)
    res.render("userList",{users});
}
module.exports={create,signup,getUser};
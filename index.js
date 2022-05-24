const express=require("express");

const path=require("path");

const mongoose=require("mongoose");

const fileupload=require("express-fileupload");

const bodyParser=require("body-parser");

const app=express();
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

// app.use("/style",express.static("public/css"));
app.use("/images",express.static("public/img"));

mongoose.connect("mongodb://127.0.0.1:27017/ead2");

const userController=require("./controllers/UserController");

app.get("/create",userController.create);

app.post("/user/create",userController.signup);

app.use("*",function(req,res){
    res.status(404).json({msg:"NOT FOUND"});
})

app.listen(3000, function(){
    console.log('port number is 3000')
})
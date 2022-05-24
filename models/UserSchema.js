const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema({ 
    username:{type:String},
    email:{tyep:String},
    phone:{type:Number},
    city:{type:String},
    postcode:{type:Number},
    pic:{type:String},

})
const User=mongoose.model("Register",UserSchema);
module.exports=User;
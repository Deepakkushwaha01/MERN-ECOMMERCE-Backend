import mongoose from "mongoose";



const sch=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true  
},
phone:{
    type:Number,
    required:true,
    unique:true  
},
account_Type:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
},

token:{
    type:String 
}

});


const auth=mongoose.model('Auth',sch);

export default auth;
import auth from "../Model/UserModel.js";

export const RequiredSign=async(req,res,next)=>{
 try {

  const ex= req.cookies.UserToken;
  const correctVal=await auth.findOne({token:ex})

if(correctVal){
  next();
}
 else{

 res.status(200).send({
    success:false,
    requireSign:false,
    message:"User  Is Not Verified"
  }) 
 }
 } catch (error) {
  res.status(500).send({
    success:false,
    requireSign:false,
    message:"Error Not Verified"
  })
 }
}

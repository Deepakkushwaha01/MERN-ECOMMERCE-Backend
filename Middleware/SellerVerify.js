import auth from "../Model/UserModel.js";

export const VerfiySeller=async(req,res,next)=>{
 try {

  const ex= req.cookies.UserToken;
  const correctVal=await auth.findOne({token:ex})

if(correctVal.account_Type=='seller'){
  next();
}
 else{
  res.status(200).send({
    success:false,
    message:"Seller Not Verified"
  })
 }
 } catch (error) {
  res.status(500).send({
    success:false,
    message:"Seller Not Verified"
  })
 }
}
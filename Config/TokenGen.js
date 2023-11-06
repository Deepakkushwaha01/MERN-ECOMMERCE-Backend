import JWT from "jsonwebtoken";

export const generateToken=async(id)=>{
    const auth=await JWT.sign({id},process.env.JWT_SECRET,{ expiresIn:"24h"});
    return auth;

}


export const verifyToken=async(token)=>{
    if(token){
        const decode=await JWT.verify( token,process.env.JWT_SECRET);
        return decode;
    }
  return null
}
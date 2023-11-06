import { verifyToken } from "../../Config/TokenGen.js"; 
import { Cart } from "../../Model/CartModel.js";


export const GetCartData=async(req,res)=>{

    try {
    const user=await verifyToken(req.cookies.UserToken);
    
   
    if(user){
        const {id}=user; 
        let allDataCart=await Cart.find({userid:id});

       return res.status(200).send({
            success:true,
            message:"Cart Data",
            allDataCart
        })
    }
else{
    res.status(201).send({
        success:false,
        message:"Login Required",
    })
}
    



    } catch (error) {
        console.log(error)
         res.status(201).send({
            success:false,
            message:"Failed to get Data Refresh page",
            
        })
    }

}
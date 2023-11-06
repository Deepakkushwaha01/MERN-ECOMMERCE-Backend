import { Cart } from "../../Model/CartModel.js";

export const Deletecart=async(req,res)=>{
    try {

const id=req.params.id;

if(id){

const updated=await Cart.findOneAndDelete({_id:id});

if(!updated){
    return res.status(200).send({
        success: false,
        message: "Item is not Found",
      });      
}

return res.status(200).send({
    success: true,
    message: "Item is deleted",
    
  });

}
     return res.status(200).send({
        success: false,
        message: "Item is not Found",
      });    
    } catch (error) {
        res.status(201).send({
            success:false,
            message:"Failed to Delete Cart Data",
            
        })
    }

}
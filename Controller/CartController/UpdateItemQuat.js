import { Cart } from "../../Model/CartModel.js";

export const updateItemQuat=async(req,res)=>{
try {

    const {id,operator,currentvalue,stock}=req.body;

    console.log(currentvalue,stock)

 if(operator === 'plus' && currentvalue<stock){ 
    
    const update=await Cart.findOneAndUpdate({_id:id},{
        $inc:{
            selectedQunatity:1
        }
    },{new:true})

    return res.status(200).send({
        success: true,
        message: "item is updated",
        
      });

}

else if(operator === 'minus' && currentvalue>1){
  
    const update=await Cart.findOneAndUpdate({_id:id},{
        $inc:{
            selectedQunatity:-1
        }
    },{new:true}) 

    return res.status(200).send({
        success: true,
        message: "Item is updated",
        
      });

}

return res.status(200).send({
    success: false,
    message: "",
  });


    
} catch (error) {
    res.status(500).send(error);
}
}
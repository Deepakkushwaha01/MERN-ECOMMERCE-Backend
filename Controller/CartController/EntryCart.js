import { verifyToken } from "../../Config/TokenGen.js";
import { Cart } from "../../Model/CartModel.js";

export const EntryCart=async(req,res)=>{
    try {
        const {selectedItem,selectedQunatity,selectedRam,selectedStorage,selectedColor}=req.body;

        console.log()
      const user=await verifyToken(req.cookies.UserToken);
const {id}=user;
  

         const exsitData=await Cart.find({'selectedItem._id':selectedItem._id,selectedRam,selectedStorage,selectedColor,userid:id})
         
         if(exsitData.length !== 0){
           

            const index=await exsitData.findIndex((val)=>{
                return ( val.userid == id, 
                     val.selectedItem._id === selectedItem._id &&
                val.selectedRam === selectedRam &&
                val.selectedStorage === selectedStorage &&
                val.selectedColor === selectedColor );
            })

if(index !== -1){
    const existingCartItem =exsitData[index];
    existingCartItem.selectedQunatity=selectedQunatity;
  await  existingCartItem.save()

  let allDataCart=await Cart.find({});
  
 console.log(exsitData.length)
    return res.status(200).send({
        success:true,
        message:"item is updated",
        allDataCart
    })
}
else{
    return res.status(200).send({
        success:true,
        message:"Error in exsitData",
        
    })
}
           
         }
         else{
            const addCart = new Cart({
                selectedItem,
                selectedQunatity,
                selectedRam,
                selectedStorage,
                selectedColor,
                userid:id
            });
            await addCart.save();

          let  allDataCart = await Cart.find({});


            res.status(200).send({
                success:true,
                message:"Add to Cart",
                allDataCart
            })
         }




    } catch (error) {
        res.status(201).send({
            success:false,
            message:"Failed to Added to Cart",
            
        })
    }

}
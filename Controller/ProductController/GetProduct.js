import { Product } from "../../Model/ProductModel.js";


export const GetProduct=async(req,res)=>{
try {
    const {sellerID}=req.body;

    if (!sellerID) {
        return res.status(201).send({
           success: false,
          message: "Seller ID are required",
        });
      }

    const exsit=await Product.find({sellerID});

    if(!exsit){
       return res.status(201).send({
            sucess:false
        })
    }

    res.status(200).send({
        success:true,
        message: "Seller Products",
        exsit
    })
} catch (error) {
    console.log('err',error)
    res.status(500).send(error);
}


}
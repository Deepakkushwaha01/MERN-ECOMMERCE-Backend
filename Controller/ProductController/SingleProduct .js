import { Product } from "../../Model/ProductModel.js";


export const SingleProduct=async(req,res)=>{
try {
    const {id}=req.body;

    if (!id) {
        return res.status(201).send({
           success: false,
          message: "Getting Error To Load Product",
        });
      }

    const exsit=await Product.find({_id:id});

    if(!exsit){
       return res.status(201).send({
            sucess:false
        })
    }

    res.status(200).send({
        success:true,
        message: "Single Products",
        exsit
    })
} catch (error) {
    console.log('err',error)
    res.status(500).send(error);
}


}
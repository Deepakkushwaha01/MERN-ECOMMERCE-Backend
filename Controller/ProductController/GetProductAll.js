import { Product } from "../../Model/ProductModel.js";


export const GetProductAll=async(req,res)=>{
try {

    const exsit=await Product.find();

    if(!exsit){
       return res.status(201).send({
            sucess:false,
            message: "Failed All PRoducts",
        })
    }

    res.status(200).send({
        success:true,
        message: "All PRoducts",
        exsit
    })
} catch (error) {
    console.log('err',error)
    res.status(500).send(error);
}


}
import { Category } from "../../Model/CategoryModel.js";

export const GetAllCategory=async(req,res)=>{
try {
    
const {sellerID}=req.body;



if (!sellerID) {
    return res.status(403).send({
      success: false,
      message: "seller ID is required",
    });
  }



  const allData=await Category.find({sellerID:sellerID});

  

  if(!allData){
    return res.status(200).send({
        success: false,
        message: "Seller Category is not available",
      });
  }

  return res.status(200).send({
    success: true,
    message: "Seller All Category",
    allData
  });

} catch (error) {
    
    res.status(500).send(error);
}
}
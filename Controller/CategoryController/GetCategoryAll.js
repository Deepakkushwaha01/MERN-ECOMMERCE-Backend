import { Category } from "../../Model/CategoryModel.js";

export const GetAllCategoryData=async(req,res)=>{
try {

  const allData=await Category.find();

  

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
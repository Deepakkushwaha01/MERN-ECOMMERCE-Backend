import { Category } from "../../Model/CategoryModel.js";


export const DeleteCategory=async(req,res)=>{
try {


    const cat_id=req.params.id;
  

if (!cat_id) {
    return res.status(403).send({
      success: false,
      message: "Category ID is Given",
    });
  }

  const updated=await Category.findOneAndDelete({_id:cat_id})


  if(!updated){
    return res.status(200).send({
        success: false,
        message: "Category is not Found",
      });
  }

  return res.status(200).send({
    success: true,
    message: "Category is deleted",
    
  });


} catch (error) {
    console.log(error)
    res.status(500).send(error);
}

}
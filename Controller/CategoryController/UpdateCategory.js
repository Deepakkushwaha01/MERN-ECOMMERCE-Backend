import { Category } from "../../Model/CategoryModel.js";


export const UpdateCategory=async(req,res)=>{
try {
    const {cat_id,category}=req.body;

if (!cat_id) {
    return res.status(403).send({
      success: false,
      message: "Category is not selected",
    });
  }

  const updated=await Category.findOneAndUpdate({_id:cat_id},{
    $set: { 
        category
    } 
  },
  {new:true}
  )


  if(!updated){
    return res.status(200).send({
        success: false,
        message: "Category is not available",
      });
  }

  return res.status(200).send({
    success: true,
    message: "Category is updated",
    
  });


} catch (error) {
    console.log(error)
    res.status(500).send(error);
}

}
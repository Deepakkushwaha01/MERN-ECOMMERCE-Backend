import { Category } from "../../Model/CategoryModel.js";


export const AddCategory=async(req,res)=>{
    try {
     const {sellerID,category}=req.body;

     if (!sellerID) {
        return res.status(403).send({
           success: false,
          message: "Seller ID are required",
        });
      }

      if (!category) {
        return res.status(403).send({
           success: false,
          message: "Seller ID are required",
        });
      }

const exist=await Category.findOne({category});

if(exist){
    return res.status(200).send({
        success: false,
        message: "Category already exsit",
      });
}


const NewOne=new Category({
    sellerID,
    category
}).save()

res.status(200).send({
    success: true,
    message: "New Category Added",
})

    } catch (error) {
        res.status(500).send("error while Category Adding");
    }
}
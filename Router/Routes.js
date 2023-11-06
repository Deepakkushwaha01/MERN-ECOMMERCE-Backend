import express from "express";
import register from "../Controller/UserController/Register.js";
import login from "../Controller/UserController/Login.js";
import { EntryProduct } from "../Controller/ProductController/EntryProduct.js";
import multer from "multer";
import { GetProduct } from "../Controller/ProductController/GetProduct.js";
import { VerfiySeller } from "../Middleware/SellerVerify.js";
import { RequiredSign } from "../Middleware/RequiredSign.js";
import { AddCategory } from "../Controller/CategoryController/EntryCategory.js";
import { GetAllCategory } from "../Controller/CategoryController/GetCategory.js";
import { UpdateCategory } from "../Controller/CategoryController/UpdateCategory.js";
import { DeleteCategory } from "../Controller/CategoryController/DeleteCategory.js";
import { AddImages } from "../Controller/ProductController/ImagesEntryProduct.js";
import { GetProductAll } from "../Controller/ProductController/GetProductAll.js";
import { GetAllCategoryData } from "../Controller/CategoryController/GetCategoryAll.js";
import { SingleProduct } from "../Controller/ProductController/SingleProduct .js";
import { EntryCart } from "../Controller/CartController/EntryCart.js";
import { GetCartData } from "../Controller/CartController/GetCart.js";
import { Deletecart } from "../Controller/CartController/DeleteCartData.js";
import { updateItemQuat } from "../Controller/CartController/UpdateItemQuat.js";




const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + '-' +file.originalname)
    }
  })


  const upload = multer({ storage: storage })

/* ------------------------------------------ User --------------------------------------------- */
router.post('/register',register);
router.post('/login',login);
/* --------------------------------------------------------------------------------------------- */





/* ---------------------------------- Product ---------------------------------------------------- */
router.post('/p',RequiredSign,VerfiySeller, /* upload.array('image'), */EntryProduct);
router.patch('/p/image',upload.array('image'),AddImages)

router.post('/pGet', RequiredSign,VerfiySeller,  GetProduct);

router.post('/pGetAll',GetProductAll);
router.post('/single_product',SingleProduct);

/* ----------------------------------------------------------------------------------------------- */





/* ---------------------------------- Category ---------------------------------------------------- */
router.post('/AddCat',RequiredSign,VerfiySeller,AddCategory);
router.post('/GetCat',RequiredSign,VerfiySeller,GetAllCategory);

router.patch('/updateCat',RequiredSign,VerfiySeller,UpdateCategory);
router.delete('/deleteCat/:id',RequiredSign,VerfiySeller,DeleteCategory);


router.get('/GetCatData',GetAllCategoryData);

/* ----------------------------------------------------------------------------------------------- */




/* ---------------------------------- Add Cart ------------------------------------------------------- */


router.post('/addcart',RequiredSign,EntryCart)
router.get('/getcartdata',GetCartData);
router.delete('/deleteCartProduct/:id',Deletecart)
router.patch('/updateCartItem',updateItemQuat);
/* -------------------------------------------------------------------------------------------------- */




/* --------------------------------------------- Clear Cookie ------------------------------------- */
router.get('/clearCookie',async(req,res)=>{
  res.clearCookie("UserToken");
  
  res.status(201).send({
    success:true,
    message:"cleared"
  })
})
/* -------------------------------------------------------------------------------------------------- */



/* ------------------------------- User Check ------------------------------------------------------- */
router.get('/checkUser',RequiredSign,(req,res)=>{
  
  res.status(200).send({
    success:true,
    requireSign:true,
    message:"Seller Verified"
  })
})
/* ----------------------------------------------------------------------------------------------------- */





/* ------------------------------- Seller Check ------------------------------------------------------- */
router.get('/checkSeller',RequiredSign,VerfiySeller,(req,res)=>{
  
  res.status(200).send({
    success:true,
    message:"Seller Verified"
  })
})
/* ----------------------------------------------------------------------------------------------------- */

export default router;
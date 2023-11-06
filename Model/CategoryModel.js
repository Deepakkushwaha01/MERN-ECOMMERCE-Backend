import mongoose from "mongoose";


const CatSch=mongoose.Schema({
    sellerID:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

export const Category=mongoose.model('Category',CatSch)
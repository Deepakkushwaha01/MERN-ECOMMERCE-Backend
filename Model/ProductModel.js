import mongoose from "mongoose";


const Productsch=mongoose.Schema({
    images:{
        type:Array,
       
    },
    name:{
        type:String,
       
    },
    color:{
        type:Array,
       
    },
    ram:{
        type:Array,
      
    },
    storage:{
        type:Array,
        
    },
    bullet:{
        type:Array,

    },
    brand:{
        type:String,
        
    },
    model:{
        type:String,
      
    },
    network:{
        type:String
    },
    oprating:{
        type:String
    },
    cellular:{
        type:String
    },
    discription:{
        type:String
    },
    main:{
        type:Boolean
    },
    sellerID:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:String
    }
});


export const Product=mongoose.model("Product",Productsch);
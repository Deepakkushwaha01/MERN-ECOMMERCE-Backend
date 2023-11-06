import mongoose from "mongoose";


const CartSch=mongoose.Schema({
    selectedItem:{
        type:Object,
        required:true
    },

    selectedQunatity:{
        type:Number,
    },
    selectedRam:{
        type:String,
     
    },
    selectedStorage:{
        type:String,
       
    },
    selectedColor:{
        type:String,
       
    },
    userid:{
        type:String,
       
    },
});

export const Cart=mongoose.model('Cart',CartSch);
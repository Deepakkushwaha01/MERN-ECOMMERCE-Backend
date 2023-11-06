import { Product } from "../../Model/ProductModel.js";

export const EntryProduct = async(req, res) => {
 try {
  console.log(req.body);

  const {
  
    name,
    price,
    brand,
    model,
    network,
    oprating,
    cellular,
    discription,
    color,
    ram,
    storage,
    bullet,
    sellerID,
    main,
    category,
    stock
  } = req.body;

  const colors=req.body.color;
const rams=req.body.ram;
const storages=req.body.storage;


const colorarr=colors && colors.split(/\W+/);

const ramArr=rams && rams.split(/\W+/);

const storageArr=storages && storages.split(/\W+/);


if (!color) {
  return res.status(200).send({
    success: false,
    message: "Product color is required",
  });
}

if (!sellerID) {
  return res.status(200).send({
    success: false,
    message: "Seller ID are required",
  });
}




const newONE=new Product({
  sellerID,
  name,
  price,
  brand,
  model,
  network,
  oprating,
  cellular,
  discription,
  color:colorarr,
  ram:ramArr,
  storage:storageArr,
  bullet,
  main,
  stock,
  category
  })
  
  const savedProduct=await newONE.save();

  res.status(200).send({
    success:true,
    message: "Product Details are saved",
    productID:savedProduct._id
  });

} 

catch (error) {
  console.log(error)
  res.status(500).send("error while Product Adding");
 }

};




/* 

try {
  

  const {
    name,
    price,
    brand,
    model,
    network,
    oprating,
    cellular,
    discription,
    color,
    ram,
    storage,
    bullet,
    sellerID
  } = req.body;

console.log(req.body)

const colors=req.body.color;
const rams=req.body.ram;
const storages=req.body.storage;
const bullets=req.body.bullet;

const colorarr=colors && colors.split(/\W+/);

const ramArr=rams && rams.split(/\W+/);

const storageArr=storages && storages.split(/\W+/);

const bulletArr=bullets && bullets.split(',')






const imageArr=req.files;




if (!name) {
  return res.status(200).send({
    success: false,
    message: "Product Name is required",
  });
}

if (!price) {
  return res.status(200).send({
    success: false,
    message: "Product price is required",
  });
}

if (!brand) {
  return res.status(200).send({
    success: false,
    message: "Product brand is required",
  });
}


if (!model) {
  return res.status(200).send({
    success: false,
    message: "Product model is required",
  });
}


if (!network) {
  return res.status(200).send({
    success: false,
    message: "Product network type is required",
  });
}


if (!oprating) {
  return res.status(200).send({
    success: false,
    message: "Product oprating type is required",
  });
}

if (!cellular) {
  return res.status(200).send({
    success: false,
    message: "Product cellular type is required",
  });
}

if (!discription) {
  return res.status(200).send({
    success: false,
    message: "Product discription is required",
  });
}

if (!color) {
  return res.status(200).send({
    success: false,
    message: "Product color is required",
  });
}

if (!ram) {
  return res.status(200).send({
    success: false,
    message: "Product ram is required",
  });
}

if (!storage) {
  return res.status(200).send({
    success: false,
    message: "Product storage is required",
  });
}

if (!bullet) {
  return res.status(200).send({
    success: false,
    message: "Product bullets is required",
  });
}

if (!imageArr) {
  return res.status(200).send({
    success: false,
    message: "Product Images are required",
  });
}

if (!sellerID) {
  return res.status(200).send({
    success: false,
    message: "Seller ID are required",
  });
}



const newONE=new Product({
images:imageArr,
name,
price,
brand,
model,
network,
oprating,
cellular,
discription,
color:colorarr,
ram:ramArr,
storage:storageArr,
bullet:bulletArr,
sellerID
})

newONE.save();



res.status(200).send({
  success:true,
  message: "Product Details are saved",
});
} catch (error) {
console.log(error)
res.status(500).send(error);
}

*/
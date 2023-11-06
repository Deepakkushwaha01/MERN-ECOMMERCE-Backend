import mongoose from "mongoose";

const db=async()=>{
    const user=process.env.MONGODB_USER;
    const pass=process.env.MONGODB_PASSWORD;
    try {
        await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.md4x7ja.mongodb.net/ecommerce`);
        console.log("Connect to database............")
    } catch (error) {
        console.log("Falied to Connect with database............")
    }

}


export default db;
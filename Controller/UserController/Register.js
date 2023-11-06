import auth from "../../Model/UserModel.js";
import { hashpassword } from "../../Config/Hashpass.js";

const register = async (req, res) => {
  try {
    const { name, email, password, cpassword, account_Type, phone } = req.body;

    if (!name) {
      return res.status(403).send({
        /* 403 Forbidden: Jab server client ko request puri karne ke liye permission nahi deta hai, toh yeh status code aata hai. */
        success: false,
        message: "Name is required",
      });
    }

    if (!email) {
      return res.status(403).send({
        success: false,
        message: "Email is required",
      });
    }

    if (!account_Type) {
      return res.status(403).send({
        success: false,
        message: "work is required",
      });
    }

    if (!phone) {
      return res.status(403).send({
        success: false,
        message: "work is required",
      });
    }

    if (!password) {
      return res.status(403).send({
        success: false,
        message: "Password is required",
      });
    }

    if (!cpassword) {
      return res.status(403).send({
        success: false,
        message: "Password is required",
      });
    }

if(password!==cpassword){
    return res.status(403).send({
        success: false,
        message: "Password and cpassword should be same",
      });
}


    const exsitingUser = await auth.findOne({ email });

    if (exsitingUser) {
      return res.status(200).send({
        success: false,
        message: "User already exsit",
        exsitingUser,
      });
    }




    const newUser = new auth({
      name,
      email,
      password:await hashpassword(password),
      cpassword:await hashpassword(cpassword),
      account_Type,
      phone,
    }).save();

    res.status(201).send({
      success: true,
      message: "User register successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send("error while register user");
  }
};

export default register;

import { comparepassword } from "../../Config/Hashpass.js";
import { generateToken } from "../../Config/TokenGen.js";
import auth from "../../Model/UserModel.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(403).send({
        success: false,
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(403).send({
        success: false,
        message: "Password is required",
      });
    }

    const exsitingUserData = await auth.findOne({ email });

    if (exsitingUserData && await comparepassword(password, exsitingUserData.password)) {
const Gentoken=await generateToken(exsitingUserData._id);

exsitingUserData.token=Gentoken;

exsitingUserData.save();


res.cookie("UserToken",exsitingUserData.token,{
  httpOnly: true,
     maxAge: 36000000
})
/* ------------------- Coping User Data --------------------------------------------------  */
let exsitingUser={...exsitingUserData._doc}   // While coping exsitingUser Data there is multiple Hidden Data Our Data in exsitingUser._doc

delete exsitingUser.password;
delete exsitingUser.cpassword;
delete exsitingUser.token;



      return res.status(200).send({
        success: true,
        message: "login Successfully",
        exsitingUser
      });

    }

if(!exsitingUserData){
  return res.status(200).send({
    success: false,
    message: "Email is not register",
  });
}


  } catch (error) {
    res.status(500).send(error);
  }
};

export default login;

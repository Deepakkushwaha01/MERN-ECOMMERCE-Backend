import bcrypt from 'bcrypt';

export const hashpassword=async(pass)=>{
    console.log(pass)
    try {
        const slatRound=10;
      const hash= await bcrypt.hash(pass,slatRound); 
     
      return hash;               
    } catch (error) {
        console.log(error);
    }

};



export const comparepassword=async(pass,hashpass)=>{

    return await bcrypt.compare(pass,hashpass);

}
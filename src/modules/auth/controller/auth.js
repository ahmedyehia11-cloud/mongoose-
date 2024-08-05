import userModel from "../../../../DB/model/user.model.js"



export const getAuthModule =   (req, res, next) => {

    return res.json({ message: "Auth module" })

}

 export const getUsers = async (req,res,next)=>{
    const {gender,age} = req.query
    const users = await userModel.find({gender,age:{$gt:age}})
    return res.json({message:"done",users})
}


  export const signup = async (req,res,next) =>
{
try {
  const { userName, password, confirmPassword, email, age, salary } = req.body;
//  console.log({ userName, password,confirmPassword, email, age, salary });

 // 3shan ttaked en pass = cPass
if (password != confirmPassword) {
    return res.json({ message: "password & confirmPassword misMatch" });
}
  const user = await userModel.create({userName,password,confirmPassword,email,age,salary,});
  return res.json({ message: "done", user });
} catch (error) {
    if (error.code==11000) {
        return res.json({ message: "email already exist",});
    }
      return res.json({ message: "catch error",error });
}

} 



export const logIn = async(req,res,next) =>{

    const {email,password} = req.body
    console.log({ email, password });

try {
        const user =  await userModel.findOne({email, password});
        return user? res.json({ message: "logIn", user })
                   : res.json({ message: "user is not signUp check it" });
} catch (error) {
     res.json({ message: "catch error",error });
}
}
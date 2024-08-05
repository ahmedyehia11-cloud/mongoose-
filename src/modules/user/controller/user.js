import userModel from "../../../../DB/model/user.model.js"



export const getUserModule =   (req, res, next) => {

    return res.json({ message: "User module" })
}


export const update = async (req,res,next)=>{
    const {id} = req.params
   // console.log({ email, age, salary,id });
try {
        const user = await userModel.findByIdAndUpdate(id,req.body,{ new: true });
        return user
          ? res.json({ message: "done", user })
          : res.json({ message: "in_valid data " });
} catch (error) {
        return res.json({ message: "catch error ",error});
}
}

export const deleteUser = async (req,res,next)=>{
    const {id} = req.params
try {
        const User = await userModel.findByIdAndDelete(id);
        return User
          ? res.json({ message: "done" })   
          : res.json({ message: "in_valid id acc" });
} catch (error) {
        return res.json({ message: "catch error", error})
}
    } 
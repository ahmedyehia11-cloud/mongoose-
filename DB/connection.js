import mongoose from "mongoose";

const connectDB =async() =>{
        await mongoose
          .connect(`mongodb://localhost:27017/week6v2`)
          .then((result) => {
        //    console.log(result);
            console.log("connect>>>>>>>DB<<<<<<<");
          })
          .catch((error) => {
            console.log(`fail to connect >>>DB<<<`);
          });
} 

export default connectDB
 const mongoose= require("mongoose");
 const connectBD = async ()=>{
     try {
          await mongoose.connect(process.env.MONGO_URL);
         console.log("connect to TB")
     }catch (error){
         console.log("MONGO error");
     }
 }
 module.exports=connectBD();
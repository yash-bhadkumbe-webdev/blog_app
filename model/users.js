const mongoose = require("mongoose");
const string_decoder = require("node:string_decoder");
const userSchema = new mongoose.Schema({
    username:{
        type:'string',
        required:[true,"Name is requires"]
    },
    email:{
        type:'string',
        required:[true,"email is requires"]
    },
    passowrd:{
        type:'string',
        required:[true,"Password requires"]
    },
},
{timestamps:true}
);
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;

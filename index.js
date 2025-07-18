const express= require("express");
const cors= require('cors');
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectBD = require("./config/db")

//config
dotenv.config();
//router import
const userRoutes= require('./routes/userRouts');
const {connect} = require("mongoose");
//mongoDB connection
connectDB();
//rest obj
const app = express();
//middle ware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user",userRoutes)

//port
const PORT= process.env.PORT ||8080;
//listen
app.listen(8080,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode port ${PORT}`);
});
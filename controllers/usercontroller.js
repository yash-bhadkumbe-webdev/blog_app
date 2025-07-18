const userModel = require('../model/users')

//create user register user
exports.registerController= async (req,res)=>{
    try {
        const {username,email,password}=req.body
        //validation
        if (!username || !email || !password){
            return res.status(400).send({
                success:false,
                message:'please fill all fields'
            })
        }
        //existing users
        const exisitingUser =await userModel.findOne({email})
        if(exisitingUser){
            return res.status(401).send({
                success:false,
                message:'user already exist'
            })
        }
        //savw user
        const user = new userModel({username,email,password})
        await user.save()
        return res.status(201).send({
            success:true,
            message:'new user created',
            user
        })
    }catch (error){
        console.log(error)
        return res.send(500).send({
            message:'error in register callback'
        })
    }
};


//getAllUser
exports.getAllUsers=()=>{

}


//login
exports.loginController=()=>{};
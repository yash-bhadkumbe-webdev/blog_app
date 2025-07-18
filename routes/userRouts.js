const express = require("express");
const {get} = require("mongoose");
const {getAllUsers, registerController, loginController} = require('../controllers/usercontroller')
// router object
const router = express.Router();
router.get('/all-users',getAllUsers);

router.post('/register',registerController);

router.post('/login',loginController);

module.exports=router()

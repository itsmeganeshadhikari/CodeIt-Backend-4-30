const { login } = require("../controllers/user.controller");
const User = require("../models/Users")

exports.validateRequest = async(req,res) =>{
    try {
        const user = await User.find({email: req.body.email, password:req.body.password});
        if(!user){
            res.status(200).send("Login failed");
        }
        login(req.body.email, req, res);
    } catch (error) {
        console.log(error);
    }
}
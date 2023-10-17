const { login } = require("../controllers/user.controller");
const { validatePassword, generatePassword } = require("../lib/utils");
const User = require("../models/Users")

exports.validateRequest = async(req,res) =>{
    try {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                res.status(200).send("Email not found");
            }else{
                const condition = await validatePassword(req.body.password, user.password);
                if(condition){
                    login(req.body.email, req, res);
                }
                else{
                    res.status(400).send({message:"Password doesn't match"});
                }
            }
    } catch (error) {
        console.log(error);
    }
}
//User controller

const { generatePassword } = require("../lib/utils");
const { loginWithJwt } = require("../middlewares/auth");
const User = require("../models/Users")


exports.login =async(email, req, res) =>{
    const token = await loginWithJwt(email);
    res.status(200).send({token:token})
}

exports.createUser = async(req, res)=>{
    //database save
    try {
        const newUser =  new User(req.body);
        newUser.password = await generatePassword(newUser.password);
        const insertData = await newUser.save()
        res.status(200).send({status:'Success',data:insertData})
    } catch (error) {
        res.send({error:error})
    }
}

exports.getUser =async(req, res) =>{
    try {
        const user = await User.find().populate('role');
        res.status(200).send({data:user})
    } catch (error) {
        res.send({error:error})
    }
}

exports.updateUser = async(req, res) =>{
    const id =  req.params.id;
    try {
        const newUser =  req.body;
        const userToBeUpdate =  await User.findById({_id:id});
        if(!userToBeUpdate){
            res.status(404).send({message:"User id not found"});
        }
        const updateUser =  await User.findOneAndUpdate({_id:id},
            {$set:{...newUser}},{new:true});
        if(!updateUser){
            throw new Error('Error on update')
        }
        res.status(200).send({message:"user update"})
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async(req, res) =>{
    try {
        const id = req.params.id;
        console.log(id);
        const user = await User.findById({_id:id});
        if(!user){
            throw new Error({message:'User id does not exist'});
        }
        const deletedUser = await user.deleteOne();
        res.status(200).send({deletedUser})
    } catch (error) {
        console.log(error.name);
        res.status(404).send("error")
    }
}
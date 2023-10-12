//User controller

const User = require("../models/Users")

exports.createUser = async(req, res)=>{
    //database save
    try {
        const newUser =  new User(req.body);
        const insertData = await newUser.save()
        res.status(200).send({status:'Success',data:insertData})
    } catch (error) {
        res.send({error:error})
    }
}

exports.getUser =(req, res) =>{
res.send({data:"Get user"})
}

exports.updateUser = (req, res) =>{
    console.log('update user');
}

exports.deleteUser = () =>{
    console.log('Delete user');
}
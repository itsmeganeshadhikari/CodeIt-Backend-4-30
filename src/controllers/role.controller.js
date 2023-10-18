const Role = require("../models/Role");

//User controller
exports.createRole= async(req, res)=>{
    //database save
    try {
        const newRole =  new Role(req.body);
        const insertData = await newRole.save()
        res.status(200).send({status:'Success',data:insertData})
    } catch (error) {
        res.send({error:error})
    }
}

exports.getRole =async(req, res) =>{
    try {
        const role = await Role.find();
        res.status(200).send({data:role})
    } catch (error) {
        res.send({error:error})
    }
}
//User controller

exports.createUser = (req, res)=>{
    const data =  req.body;
    console.log(data);
    res.status(200).send({data:data})
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
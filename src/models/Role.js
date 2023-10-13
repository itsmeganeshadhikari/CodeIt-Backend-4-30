const mongoose =  require('mongoose');

const roleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    typeName:{
        type: String,
        enum:['user','admin','super_admin']
    },
});

const Role=  mongoose.model('Role',roleSchema);
module.exports = Role

const mongoose =  require('mongoose');

const roleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    accessLevel:{
        type: Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


const Role=  mongoose.model('Role',roleSchema);
module.exports = Role

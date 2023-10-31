const mongoose = require('mongoose');

const roleSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
    },
    accessLevel: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const role = mongoose.model('Role', roleSchema);
module.exports = Role
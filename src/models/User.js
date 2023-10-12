const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'To short name'],
        maxlength: [55, 'To long name'],
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: [6, 'Must be minimum of six character long'],
        max: [20, 'Must not be more than twenty charachters']

    }

});

const User = mongoose.model('User',userSchema);
module.exports = User;
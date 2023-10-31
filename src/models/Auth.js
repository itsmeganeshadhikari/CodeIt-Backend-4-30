const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    refreshToken: {
        type: String
    }
});
const Auth = mongoose.model('AUth', authSchema);
module.exports = Auth;
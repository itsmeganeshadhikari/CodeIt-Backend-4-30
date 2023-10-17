const bcrypt = require('bcrypt');

exports.generatePassword = async(password)=>{
    try {
        return await bcrypt.hash(password,8)
    } catch (error) {
        console.log(error);
    }
}

exports.validatePassword = async(a,b) =>{
    try {
        const isValid =  await bcrypt.compare(a,b);
        if(isValid){
            return true
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

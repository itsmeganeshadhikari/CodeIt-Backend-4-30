// user controller
exports.createUser = async (req, res) => {
    res.status(200).send({ data: 'hello form the create page' })
}

exports.getUser = (req, res) => {
    res.send({ data: 'Get user' })
}

exports.updateUser = (req, res) => {
    console.log('update user');
}

exports.deleteUser = (req, res) => {
    console.log('delete user');

} 
const { generatePassword } = require("../lib/utils");
const User = require("../models/user")

// user controller
exports.createUser = async (req, res) => {
    //database save
    try {
        const newUser = new User(req.body);
        newUser.password = await generatePassword(newUser.password);
        const insertData = await newUser.save();
        res.status(200).send({ status: 'Success', data: insertData })
    } catch (error) {
        res.send({ error: error })
    }
}

exports.getUser = async (req, res) => {
    try {
        const newUser = await User.find();
        res.status(200).send({ data: newUser })
    } catch (error) {
        res.send({ error: error })
    }
}

exports.updateUser = async (req, res) => {
    // const id = req.params.id;
    // try {
    //     const newUser = req.body;
    //     const updateToUpdate = await User.findById({ _id: id });
    //     if (!updateToUpdate) {
    //         res.status(404).send({ message: "user id not found" });
    //     }
    //     const updateUser = await User.findOneAndUpdate({ _id: id },
    //         { $set: { ...newUser } },
    //         { new: true });

    //     if (!updateUser) {
    //         throw new Error("Error on update")
    //     }
    //     res.status(200).send({ message: 'user updated' })
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({ message: "user updated" })

    } catch (error) {
        res.status(404).send({ message: 'user update faild' })
    }
}

exports.deleteUser = async (req, res) => {
    // try {
    //     const id = req.params.id; // url ko id taneko
    //     console.log(id);
    //     const user = await User.findById({ _id: id });
    //     if (!user) {
    //         throw new Error({ message: 'user id does not exist' });
    //     }
    //     const deleteUser = await user.deleteOne();
    //     res.status(200).send({message: "id was deleted"})
    // } catch (error) {
    //     console.log(error.message);;
    //     res.status(404).send('error')
    // }

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.json({
            status: "success",
            data: null
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }

} 
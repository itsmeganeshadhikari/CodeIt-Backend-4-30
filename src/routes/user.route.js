const express = require('express');
const { getUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller');
const userRoute = express.Router();

userRoute.get('/user', getUser);   // joining route with controller
userRoute.post('/user/', createUser);
userRoute.put('/user/:id', updateUser);
userRoute.delete('/user/:id', deleteUser);

module.exports = userRoute;
const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const { validateRequest } = require('../middlewares/validator');
const { isAuth } = require('../middlewares/auth');
const userRoute = express.Router();

userRoute.post('/user/login', validateRequest);
userRoute.get('/user/', getUser);
userRoute.post('/user', createUser);
userRoute.put('/user/:id', updateUser);
userRoute.delete('/user/:id', deleteUser);

module.exports = userRoute;
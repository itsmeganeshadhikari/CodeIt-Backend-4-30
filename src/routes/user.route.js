const express = require('express');
const { getUser, createUser, updateUser, deleteUser, login } = require('../controllers/user.controller');
const { isAuth, isRole } = require('../middlewares/auth');
const { validateRequest } = require('../middlewares/validator');
const userRoute = express.Router();

userRoute.post('/user/login', validateRequest);
userRoute.get('/user', getUser);
userRoute.post('/user',isRole, createUser);
userRoute.put('/user/:id',isRole, updateUser);
userRoute.delete('/user/:id',isRole, deleteUser);

module.exports =  userRoute;
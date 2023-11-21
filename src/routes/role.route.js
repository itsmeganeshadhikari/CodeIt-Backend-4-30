const express = require('express');
const { createRole, getRole } = require('../controllers/role.controller');
const { validateRequest } = require('../middlewares/validator');
const roleRoute = express.Router();

roleRoute.get('/role', getRole);
roleRoute.post('/role',createRole);
module.exports =  roleRoute;
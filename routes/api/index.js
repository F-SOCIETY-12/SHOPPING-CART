const route = require('express').Router();

route.use('/users', require('./users'))
route.use('/products',require('./products'))  //yai ha request aat

exports = module.exports = {route}
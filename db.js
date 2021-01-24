const Sequelize = require('sequelize')
                         //database      username   password
                         //  |              |         |
const db = new Sequelize('shoppingmall','showroom','sony',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max: 5,
    }
})

const User = db.define('users',{
    id : {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

const Product = db.define('products',{
    id : {
        type : Sequelize.DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    manufacturer : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.DataTypes.FLOAT,
        allowNull:false,
        defaultValue : 0.0
    }
})

//db.authenticate();
db.sync()  //it is also a promised function
.then(()=>
{
    console.log("database has been created")   
})
.catch((err)=>
{
    console.error("error occurred in databse")
})
exports = module.exports = {User,Product}  //exports the user and product class
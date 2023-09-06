const {DataTypes} = require("sequelize");
const db = require('../db/conn')
    /*
    Create TABLE user(
        nome VARCHAR(255) NOT null
        cargo VARCHAR(255) NOT null
        NEWSLETTER BOOL
    );
    */
const user = db.define('User', {
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    occupation:{
        type: DataTypes.STRING,
        require: true
    },
    newsletter:{
        type: DataTypes.BOOLEAN,
        
    }
})
module.exports = user
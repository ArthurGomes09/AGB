const {DataTypes} = require("sequelize");
const db = require('../db/conn')
    /*
    Create TABLE user(
        nome VARCHAR(255) NOT null
        cargo VARCHAR(255) NOT null
        NEWSLETTER BOOL
    );
    */
const livros = db.define('Livros', {
    titulo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    autor:{
        type: DataTypes.STRING,
        require: true
    },
    capa_dura:{
        type: DataTypes.BOOLEAN,
        
    },
    preco:{
        type: DataTypes.INTEGER,
    }
})
module.exports = livros
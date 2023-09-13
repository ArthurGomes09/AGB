const mysql = require("mysql2") //Drive do banco
const { Sequelize } = require("sequelize")
//Criar a conexão com o banco

const sequelize = new Sequelize(
    'nodesequelize2',
    'root',
    'Sen@iDev77!.',
    {
        // connectionLimit: 10,
        host: 'localhost',
        port: 3306,
        dialect:'mysql',
        // user: 'root',
        // password:'Sen@iDev77!.',
        // database:'banco2'
    }
    );

// Exportando módulo criado...
// try{
//     sequelize.authenticate()
//     console.log('Conectado com sucesso')
// }catch(err){
//     console.log(`Não foi possível conectar: ${err}`)
// }
module.exports = sequelize

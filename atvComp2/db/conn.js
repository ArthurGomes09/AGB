const mysql = require("mysql2") //Drive do banco

//Criar a conexão com o banco
const pool = mysql.createPool({
    //CACHE disponível para aplicação
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'Sen@iDev77!.',
    database:'banco2'
})

// Exportando módulo criado...
module.exports = pool
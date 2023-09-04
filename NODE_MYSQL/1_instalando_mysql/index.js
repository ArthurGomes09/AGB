const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2") //Drive do banco
const gate = 4444
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para utilizar arquivos estáticos...

app.use(express.static('public'))

//Criar a conexão com o banco

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'Sen@iDev77!.',
    database:'banco'
})

//Estabelecendo a conexão
conn.connect(function(err){
    if(err){
        console.log(err)
        return
    } else{
        console.log("MYSQL conectado!")
        
        app.listen(gate, ()=>{
            console.log(`Server ON na porta ${gate}`)
        })
    }
})











//Rota -> localhost:4444
app.get('/',(req, res)=>{
   return res.render("home")
})



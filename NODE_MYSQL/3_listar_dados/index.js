const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2") //Drive do banco
const gate = 5000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para utilizar arquivos estáticos...

//Para receber informações do front-end
app.use(express.urlencoded({extended:true}))


app.use(express.static('public'))

//Criar a conexão com o banco

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'Sen@iDev77!.',
    database:'banco2'
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
//Rota -> localhost:5000/books
app.get('/books',(req,res)=>{
    const sql = 'SELECT * FROM books'
    conn.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        } 
        const books = data
        console.log(books)  
        return res.render('books',{books})
    })
    
})

//Rota -> localhost:3333/books/insertbook
app.post('/books/insertbook',(req, res)=>{
    const {title, nm_paginas} = req.body
    console.log(title, nm_paginas)

    const sql = `INSERT INTO books (title, nm_paginas) VALUES ('${title}', '${nm_paginas}')`

    conn.query(sql,)
})








//Rota -> localhost:4444
app.get('/',(req, res)=>{
   return res.render("home")
})



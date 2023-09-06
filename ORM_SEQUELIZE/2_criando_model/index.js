const express = require('express')
const expbhs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const gate = 3333
const User = require('./models/User')
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', expbhs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req, res)=>{
    return res.render('home')
})

conn.sync().then(()=>{
    app.listen(gate,()=>{
        console.log(`server ON na porta: ${gate}`)
    })
}).catch((error)=>{
    console.log(error)
})












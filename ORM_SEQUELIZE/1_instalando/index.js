const express = require('express')
const expbhs = require('express-handlebars')
const app = express()
const gate = 3333

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', expbhs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req, res)=>{
    return res.render('home')
})

app.listen(gate,()=>{
    console.log(`server ON na porta: ${gate}`)
})
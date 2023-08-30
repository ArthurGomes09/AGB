const express = require("express")
const exphbs = require("express-handlebars")
const GATE = 4444
// utilizando express
const app = express()

// utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
    return res.render('home')})

app.listen(GATE, ()=>{
    console.log(`server ON ${GATE}`)
})
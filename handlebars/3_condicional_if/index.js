const express = require("express")
const exphbs = require("express-handlebars")
const GATE = 2222
// utilizando express
const app = express()

// utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard', (req,res)=>{
    return res.render('dashboard')
})

app.get('/', (req, res)=>{
    const user = {
        name: "Carlos",
        surname:"Wilton",
        age: "31"
    };

    const palavra = "Teste"

    const auth = true

    return res.render('home', {user:user, palavra, auth})
})

app.listen(GATE, ()=>{
    console.log(`server ON ${GATE}`)
})
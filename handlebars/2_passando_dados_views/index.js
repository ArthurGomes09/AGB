const express = require("express")
const exphbs = require("express-handlebars")
const GATE = 5555
// utilizando express
const app = express()

// utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/', (req, res)=>{
    const user = {
        name: "Carlos",
        surname:"Wilton",
        age: "31"
    };

    const palavra = "Teste"

    return res.render('home', {user:user, palavra})
})

app.listen(GATE, ()=>{
    console.log(`server ON ${GATE}`)
})
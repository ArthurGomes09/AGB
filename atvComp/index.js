const express = require("express")
const app = express()
const GATE = 2222

const expbhs = require("express-handlebars")

const hbs = expbhs.create({
    partialsDir:["views/partials"]
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static("public"))

app.get('/dashboard', (req, res)=>{
    const items = 
    [
    "Pão Francês",
    "Bolo de Fubá",
    "Bolacha Mimosa",
    "Salgadinho",
    "Bolo Vulcão",
    "Coxinha",

    ]
    return res.render('dashboard', {items})
})
app.get('/',(req, res)=>{
    const user = {
        name: "Arthur",
        surname:"Gomes",
        age:"17"
    };
    const palavra_chave = "OPA"
    const auth = true 
    const approved = true

    return res.render('home', {user:user, palavra_chave, auth, approved})
})

app.listen(GATE,()=>{
    console.log(`server |ON| ${GATE}`)   
})
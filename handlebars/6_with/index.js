const { response } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const GATE = 2222
// utilizando express
const app = express()

// utilizando o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard', (req,res)=>{

    //requisição
    // const {name, age} = req.body

    const items = ["item01","item02","item03"]
    return res.render('dashboard',{items})
})

app.get('/post', (req, res)=>{
    const post = {
        title:"Tentando aprender NODE",
        category:"JavaScript",
        body:"Este artigo vai te ajudar a aprender node.js",
        comments:6,
    }
    return res.render("blogpost", {post})
} )

app.get('/', (req, res)=>{
    const user = {
        name: "Arthur",
        surname:"Gomes",
        age: "17"
    };

    const palavra = "Brave New World"
    const auth = true
    const approved = true

    return res.render('home', {user:user, palavra, auth, approved})
})

app.listen(GATE, ()=>{
    console.log(`server ON ${GATE}`)
})
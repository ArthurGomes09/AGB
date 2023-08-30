const { response } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const GATE = 2222
// utilizando express
const app = express()

// utilizando o handlebars
const hbs = exphbs.create({
    partialsDir:['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.use(express.static("public"))


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

app.get('/blog', (req, res)=>{
    const posts = [
        {
        title:"Tentando aprender NODE",
        category:"JavaScript",
        body:"Este artigo vai te ajudar a aprender node.js",
        comments:6,
        },
        {
        title:"Tentando aprender JS",
        category:"JavaScript",
        body:"Este artigo vai te ajudar a aprender JavaScript",
        comments:5,
        },
        {
        title:"Tentando aprender SQL",
        category:"MySQL",
        body:"Este artigo vai te ajudar a aprender MySQL",
        comments:4,
        }
    ]
    return res.render('blog',{posts})
})

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
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
//rota do form
app.get('/users/create',(req,res)=>{
    return res.render('adduser')
})
//rota cadastro
app.post('/users/create', async(req,res)=>{
    const {name,occupation} = req.body
    let newsletter = req.body.newsletter
    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = flse
    }
    console.log(req.body)
    //inserir
    await User.create({name,occupation,newsletter})
    return res.redirect('/')
})







app.get('/',async (req, res)=>{
    const users = await User.findAll({raw:true})
    console.log(users)
    return res.render('home',{users})
})

conn.sync().then(()=>{
    app.listen(gate,()=>{
        console.log(`server ON na porta: ${gate}`)
    })
}).catch((error)=>{
    console.log(error)
})












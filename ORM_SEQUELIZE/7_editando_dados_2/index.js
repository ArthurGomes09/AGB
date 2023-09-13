const { response } = require('express');
const express = require('express');
const expbhs = require('express-handlebars');
const { restart } = require('nodemon');
const app = express();
const conn = require('./db/conn');
const gate = 3333
const User = require('./models/User');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine('handlebars', expbhs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
//rota do form
app.get('/users/create',(req,res)=>{
    return res.render('adduser')
});
//rota cadastro
app.post('/users/create', async(req,res)=>{
    const {name,occupation} = req.body
    let newsletter = req.body.newsletter
    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    console.log(req.body)
    //inserir
    await User.create({name,occupation,newsletter})
    return res.redirect('/')
});

app.post('/users/delete/:id', async(req,res)=>{
    const id = req.params.id
    //delete - destroy
    await User.destroy({where:{id:id}})
    return res.redirect('/')
})

app.get('/users/edit/:id', async(req,res)=>{
    const id = req.params.id
    const user = await User.findOne({raw:true, where:{id:id}})
    console.log(user)
    return res.render('edituser',{user:user})
})

//rota para listar um único usuário
app.get('/users/:id',async (req,res)=>{
    const id = req.params.id
    const user = await User.findOne({raw:true, where:{id:id}})
    console.log(user)
    return res.render('viewuser',{user})
});




app.get('/',async (req, res)=>{
    const users = await User.findAll({raw:true})
    console.log(users)
    return res.render('home',{users})
});

conn.sync().then(()=>{
    app.listen(gate,()=>{
        console.log(`server ON na porta: ${gate}`)
    })
}).catch((error)=>{
    console.log(error)
});












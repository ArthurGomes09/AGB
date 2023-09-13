const { response } = require('express');
const express = require('express');
const expbhs = require('express-handlebars');
const { restart } = require('nodemon');
const app = express();
const conn = require('./db/conn');
const gate = 3333
const User = require('./models/User');
const Livros = require('./models/livros')
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
//rota delete
app.post('/users/delete/:id', async(req,res)=>{
    const id = req.params.id
    //delete - destroy
    await User.destroy({where:{id:id}})
    return res.redirect('/')
})
//rota de edit
app.get('/users/edit/:id', async(req,res)=>{
    const id = req.params.id
    const user = await User.findOne({raw:true, where:{id:id}})
    console.log(user)
    return res.render('edituser',{user:user})
})
//rota de atualizacao
app.post('/users/update', async(req,res)=>{
    const {id,name,occupation} = req.body
    let newsletter = req.body.newsletter
    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }
    //Montar um objeto, para função do sequelize receba um dado
    const userData = {
        id,
        name,
        occupation,
        newsletter
    }
    //Update -> Update
    await User.update(userData,{where:{id:id}})

    return res.redirect('/')
})
//rota para listar um único usuário
app.get('/users/:id',async (req,res)=>{
    const id = req.params.id
    const user = await User.findOne({raw:true, where:{id:id}})
    console.log(user)
    return res.render('viewuser',{user})
});

//--------------------------------------------- ROTAS DOS LIVROS -------------------------------------------------------
//rota do form do livro
app.get('/livros/create',(req,res)=>{
    return res.render('addlivro')
})
//rota de inserir/cadastrar
app.post('/livros/create', async(req,res)=>{
    const {titulo, autor, preco} = req.body
    let capa_dura = req.body.capa_dura
    if(capa_dura === 'on'){
    capa_dura = true
    }else{
        capa_dura = false
    }
    console.log(req.body)
    await Livros.create({titulo,autor,preco,capa_dura})
    return res.redirect('/homelivro')
})
//rota de deletar
app.post('/livros/delete/:id', async(req,res)=>{
    const id = req.params.id
    //delete - destroy
    await Livros.destroy({where:{id:id}})
    return res.redirect('/homelivro')
})
//rota de editar
app.get('/livros/edit/:id', async(req,res)=>{
    const id = req.params.id
    const livro = await Livros.findOne({raw:true, where:{id:id}})
    console.log(livro)
    return res.render('editlivro',{livro:livro})
})
//rota de detalhes
app.get('/livros/:id',async(req,res)=>{
    const id = req.params.id
    const livro = await Livros.findOne({raw:true, where:{id:id}})
    console.log(livro)
    return res.render('viewlivro',{livro})
})
app.post('/livros/atualizar',async(req,res)=>{
    const {id,titulo,autor,preco} = req.body
    let capa_dura = req.body.capa_dura
    if(capa_dura === 'on'){
        capa_dura = true
    }else{
        capa_dura = false
    }
    //Montar um objeto, para função do sequelize receba um dado
    const livroData = {
        id,
        titulo,
        autor,
        preco,
        capa_dura
    }
    //Update -> Update
    await Livros.update(livroData,{where:{id:id}})

    return res.redirect('/homelivro')
});





//rota homelivros
app.get('/homelivro',async (req,res)=>{
    const livros = await Livros.findAll({raw:true})
    console.log(livros)
    return res.render('homelivro',{livros})
});
//rota home
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












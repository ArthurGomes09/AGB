const { response } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const pool = require("./db/conn") //modulo interno
const gate = 5000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//Middleware para utilizar arquivos estáticos...

//Para receber informações do front-end
app.use(express.urlencoded({extended:true}))


app.use(express.static('public'))



//Rota -> localhost:5000/curso
app.get('/curso',(req,res)=>{
    const sql = 'SELECT * FROM curso'
    pool.query(sql, (err, data)=>{
        if(err){
            console.log(err)
            return
        } 
        const curso = data
        console.log(curso)  
        return res.render('curso',{curso})
    })
})
//Rota -> localhost:5000/curso/:id
app.get('/curso/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM curso WHERE id = '${id}'`
    const data = ['id', id]
    pool.query(sql, data, (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const curso = data[0]
        console.log(curso)
        return res.render('curso', {curso})
    })
    console.log(id)
   
})
//Edição primeira etapa
app.get('/curso/edit/:id',(req,res)=>{
        const id = req.params.id

        const sql = `SELECT * FROM curso WHERE id = '${id}'`
        pool.query(sql, (err,data)=>{
            if(err){
                console.log(err)
                return
            }
            const curso = data[0]
            console.log(curso)
            return res.render('editarcurso', {curso})
        })
    
})

//Edição segunda etapa
app.post('/curso/updatecurso',(req,res)=>{
    const {id,nome_curso,descricao} =  req.body
   
    const sql = `UPDATE curso SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['nome_curso', nome_curso, 'descricao', descricao, 'id', id]
    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        return res.redirect('/curso')
    })
    
})

//Removendo um curso
app.post('/curso/remove/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM curso WHERE ?? = ?`
    const data = ['id', id]
    pool.query(sql, data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        return res.redirect('/curso')
    })
})

//Rota -> localhost:3333/cursos/inserircurso
app.post('/curse/inserircurso',(req, res)=>{
    const {nome_curso, descricao} = req.body
    console.log(nome_curso, descricao)

    const sql = `INSERT INTO curso (??, ??) VALUES (?, ?)`

    const data = ['nome_curso','descricao', nome_curso, descricao]

    pool.query(sql,data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/')
    })
})








//Rota -> localhost:4444
app.get('/',(req, res)=>{
   return res.render("home")
})

app.listen(gate, ()=>{
    console.log(`Server ON na porta ${gate}`)
})

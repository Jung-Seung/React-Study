const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db=require('./config/db.js')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/board',(req,res)=>{
    console.log('/board')
    db.query("select * from board",(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
app.get('/board/:no',(req,res)=>{
    console.log('/board/:no')
    const no = req.params.no
    db.query(`select * from board where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
app.post('/board',(req,res)=>{
    console.log('/board(POST)')
    console.log(req.body)
    const {title,contents,author,reg_date,attach,hits} = req.body
    //ES6문법 - 비구조화할당, 구조분해할당, destructuring assignment
    db.query(`insert into board(title,contents,author,reg_date,attach,hits)
    values('${title}','${contents}','${author}','${reg_date}','${attach}',${hits})`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
app.put('/board/:no',(req,res)=>{
    console.log('/board/:no(PUT)')
    const no = req.params.no
    console.log(no)
    console.log(req.body)
    const {title,contents} = req.body
    db.query(`update board set title='${title}',contents='${contents}' where no=${no}`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err)
        }
    })
})
app.delete('/board/:no',(req,res)=>{
    console.log('/board/:no(DELETE)')
    const no = req.params.no
    db.query(`delete from board where no=${no}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})
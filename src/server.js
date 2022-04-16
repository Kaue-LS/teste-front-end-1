var express= require('express')
var cors= require('cors')
var fs= require('fs')

var app= express()


app.use(express.json())
app.use(cors())
app.listen(9090, ()=>console.log('Servidor Rodando'))

let Data=[]
app.get('/',(req,res)=>{
    fs.readFile(__dirname+'/api/Api.json','utf-8',(err,data)=>{
        if(err){
            var response ={status:'falha',resultado:err}
            res.json(response)
        }else{
             Data=JSON.parse(data)
             return res.json(Data.products)
        }
    })
})

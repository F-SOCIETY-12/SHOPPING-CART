const express = require('express')
const path = require('path')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public'))) //include public folder on this '/' path

app.use('/api',require('./routes/api').route)

app.listen(4750,()=>
{
    console.log('http://localhost:4750/')
})
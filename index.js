const express=require('express')
const app=express()

app.set('view engine', 'ejs')

app.listen('9000',(req,res)=>{
    console.log("WorkingPerfectly!");
})

app.get('/',(req,res)=>{
    res.render('trialPage');
})
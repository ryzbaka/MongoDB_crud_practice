//mongodb+srv://testboy:<password>@rest-adtjc.mongodb.net/test?retryWrites=true&w=majority
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const bodyParser=require('body-parser')
require('dotenv/config')//FOR GETTING ACCESS TO .env

app.use(bodyParser.json())

//Middlewares~ A function that executes when routes are being hit
//Import Routes
const postsRoute=require('./routes/posts')
app.use('/posts',postsRoute)
//routes
app.get('/',function(req,res){
    res.send("we are on home")
})

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,//environment variable
    {useNewUrlParser:true},
    function(){console.log("connected to db...")}
    )
//listening
app.listen(3001,function(){
    console.log("listening on port 3001...")
})
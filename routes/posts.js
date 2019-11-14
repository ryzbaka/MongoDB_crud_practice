const express=require('express')
const Post=require('../models/Post')
const router=express.Router()

router.get('/',function(req,res){
    res.send("We are on posts")
})


router.post('/',async function(req,res){
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    })//constructor for Post instance which is a collection
    try{
    const savedPost=await post.save()//commit change into database
    res.json(savedPost)
    }catch(err){
        res.json({message:err})
    }
})


module.exports=router
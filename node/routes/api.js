const express = require('express')
const router = express.Router()
const User = require('../models/user')
//including jwt
const jwt = require('jsonwebtoken')




router.get('/', function(req,res){
    res.status(200).send('From api router')
})

router.get('/register', function(req,res){
    User.find(req.body).then(function(user){
        console.log(user.email)
         res.status(200).send({
               user   
         })
     });
})

router.post('/login', function(req,res){
    let userData = req.body
    User.findOne({email : userData.email},(error,user)=>{
        if (error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('invalid user')
            }else if (user.password !== userData.password){
                res.status(401).send('invalid password')

            }else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload,'secretKey')


                res.status(200).send({token})
            }
        }
    
    }
    )
})


router.put('/register/:id', function(req,res){
    res.send('From api router')
})
router.post('/register', function(req,res){
    /*let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })

*/


/*  var user = new User(req.body)
user.save();*/

User.create(req.body).then(function(user){
   console.log(user.email)
   let payload = { subject: user._id}
   let token = jwt.sign(payload,'secretKey')
    res.status(200).send({token})
});
})
router.delete('/register/:id', function(req,res){
    
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user)
        console.log(user)
    })
   
})




module.exports = router

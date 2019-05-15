const mongoose = require('mongoose')

const schema = mongoose.Schema

const userschema = new schema({

    email:{
        type: String
        
    },
    password:{
        type: String,
        
    }

});


module.exports = mongoose.model('user',userschema);
 
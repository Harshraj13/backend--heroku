const moment = require('moment/moment');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        default:moment(Date.now()).format('DD MMM YYYY')

    }

})

module.exports = mongoose.model("UserInfoAssignment",userSchema);
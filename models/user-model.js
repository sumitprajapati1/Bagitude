const mongoose =require("mongoose");

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:3
    },
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    picture:String,
    contact:Number,
})

module.exports = mongoose.model("user", userSchema);
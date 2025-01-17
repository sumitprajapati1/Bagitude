const  mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:21017/bagitude")
.then(function (){
    console.log("connected to mongoDB");
})
.catch(function (err){
    console.log("error connecting to mongoDB",err);
})

module.exports= mongoose.connections;


const { Schema, model, default: mongoose } = require("mongoose");


const UserSchema=new Schema({
    name:String,
    email:String,
    image:String,
    emailVerified:Date,
    
}) 

export const User=mongoose?.models?.User || model('User',UserSchema);
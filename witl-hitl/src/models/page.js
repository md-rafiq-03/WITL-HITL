


const { Schema, model, default: mongoose } = require("mongoose");

const PageSchema=new Schema({
    uri:{type:String,require:true, min:1, unique:true},
    owner:{type:String, required:true},
    displayName:{type:String, default:''},
    location:{type:String,default:''},
    bio: {type:String, default:''},
    bgType:{type:String,default:'color'},
    bgColor:{type:String, default:'#000'},
},{timestamps:true});


export const Page=mongoose.models?.Page || mongoose.model('Page',PageSchema);
import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    text:{
        type: String,
        required: true,
    },
    attatchment:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default:user,
    },
} ,{timestamps})


export const User  = mongoose.model("User",userSchema )
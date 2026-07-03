const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:4,
        maxLength:50,
        
        
    },
    lastName: {
        type: String,
       
    },
    emailId: {
        type: String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email"+value);
            }
        },
        
    },
    password: {
        type: String,
        required:true,
         validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("enter strong password: "+value);
            }
        },
        
    },
    age:{
        type:Number,
        min:18,
    },
    gender: {
        type: String,
       
        validate(value){
            if(!["male","Female","others"].includes(value)){
                throw new Error("gender data is not valid");
            }
        },
        
    },
    photoUrl:{
        type:String,
        default:"https://in.images.search.yahoo.com/images/view;",
         validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL"+value);
            }
        }, 
    },
    about:{
        type:String,
        default:"this is default about user!",
    },
    skills:{
         type:[String],
    },
},
{
    timestamps:true,
});
userSchema.methods.getJWT=async function(){
    const user = this;
    const token = jwt.sign({_id: user._id}, "Shivam@123", {
        expiresIn: "7d",
    });
    return token;
}

userSchema.methods.validatePassword = async function (inputPassword) {
    const user = this;
    const isPasswordValid = await bcrypt.compare(inputPassword, user.password);
    return isPasswordValid;
}

module.exports = mongoose.model("User", userSchema);        
const express=require("express");
const profileRouter=express.Router();
const { userAuth } = require("../middlewares/auth");
const bcrypt = require("bcrypt");

const{validateEditProfileData}=require("../utils/validation");

profileRouter.get("/profile/view",userAuth,async(req,res)=>{
  try{
 
  const user=req.user;
 
  res.send(user);
  } catch (err) {
    res.status(400).send("Error :"+err.message);
  }
});

profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
  try{
   const requestBody = req.body || {};
   const incomingFields = Object.keys(requestBody);

   if(incomingFields.length === 0){
    throw new Error("No profile fields provided to edit");
   }

   if(incomingFields.includes("oldPassword") || incomingFields.includes("newPassword")){
    throw new Error("Use /profile/password endpoint to update password");
   }

   if(!validateEditProfileData(req)){
    throw new Error("Invalid edit request");
   }

   const loggedInUser=req.user;
  
  incomingFields.forEach((key)=>(loggedInUser[key]=requestBody[key]));

   await loggedInUser.save();
   res.json({ 
    message: `${loggedInUser.firstName}, your profile has been updated 
successfully!`,
    data: loggedInUser,
  });
  } catch (err) {
    res.status(400).send("Error :"+err.message);
  }
});

profileRouter.patch("/profile/password",userAuth,async(req,res)=>{
  try{
    const loggedInUser = req.user;
    const {oldPassword,newPassword}=req.body || {};

    if(!oldPassword || !newPassword){
      throw new Error("Old password and new password are required");
    }

    if(oldPassword === newPassword){
      throw new Error("New password cannot be same as old password");
    }

    if(!await loggedInUser.validatePassword(oldPassword)){
      throw new Error("Invalid old password");
    }

    const passwordHash = await bcrypt.hash(newPassword,10);
    loggedInUser.password=passwordHash;
    await loggedInUser.save();

    res.json({ 
      message: `${loggedInUser.firstName}, your password has been updated successfully!`,
    });
  } catch (err) {
    res.status(400).send("Error :"+err.message);
  }
});
module.exports=profileRouter;
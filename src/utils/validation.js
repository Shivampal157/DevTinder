const validator=require("validator");
const validateSignUpData=(req)=>{
    const{firstName,lastName,emailId,password}=req.body;
    
    if(!firstName || !lastName ) {
        throw new Error("Name is not valid");
    }
    
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password");
    }
   
};

const validateEditProfileData=(req)=>{
    const allowedEditFields=["firstName","lastName","age","gender","emailId","photoUrl","about","skills"];

const requestBody = req.body || {};
if (Object.keys(requestBody).length === 0) {
    return false;
}

const isEditAllowed=Object.keys(requestBody).every((field)=>allowedEditFields.includes(field));

return isEditAllowed;
};

module.exports = {
    validateSignUpData,
    validateEditProfileData,
};
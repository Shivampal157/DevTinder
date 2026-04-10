const express=require("express");
const app=express();

app.use("/hello",(req, res)=>{
    res.send("Hello hello");

})
app.use("/",(req, res)=>{
    res.send("Hello from the dsh");

})

app.use("/test",(req, res)=>{
    res.send("Hello from the ser");

})

app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777")

})
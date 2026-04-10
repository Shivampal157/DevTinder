const express=require("express");
const app=express();

app.use("/user/:userid",(req, res)=>{
    console.log(req.params);
    res.send({firstName: "Shivam", LastName: "Pal", Age: 20});
});
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777")

})
const express=require("express");
const app=express();

app.use("/user",(req, res)=>{
    res.send("hhfff");
});

app.get("/user",(req, res)=>{
    res.send({FirstName: "Shivam", LastName: "Pal", Age: 20});
});

app.post("/user",(req, res)=>{
    res.send("User created successfully");
});
app.delete("/user",(req, res)=>{
    res.send("User deleted successfully");
});

app.use("/test",(req, res)=>{
    res.send("Hello from the ser");
})
app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777")

})
const express=require("express")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
	res.send("Hello from node");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
})

const express= require("express");
const bodyParser=require("body-parser");
const exp = require("constants");

const app=express();

var items=[];
let workItems=[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    var today=new Date();
    var currentDay=today.getDay();
    var day="";

    var options={
        weekDay:"long",
        day:"numeric",
        month:"long"
    };
    var day= today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle:day,newListItems:items});
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.post("/",(req,res)=>{

    let item=req.body.newItem;

    if(req.body.list ==="Work"){
        workItems.push(item)
        res.redirect("/work"); 
    }
    else{
        items.push(item);
        res.redirect("/");
    }

    
    

    //sends the incoming data from form back to the page
    
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000!");
})
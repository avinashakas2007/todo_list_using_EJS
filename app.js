//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/todoDB",{useNewUrlParser:true,useUnifiedTopology:true});
const todoSchema=mongoose.Schema({
  name:String
});
const todo=mongoose.model("Todolist",todoSchema);

const listSchema=mongoose.Schema({
  name:String,
  items:[todoSchema]
});
const List=mongoose.model("List",listSchema);

const item1=new todo({
  name:"Welcome to your todolist!"
});
const item2=new todo({
  name:"Click the + button to add a new task"
});

const item3=new todo({
  name:"<--- Hit this button to delete an item"
});

const defaultItem=[item1,item2,item3];


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const defaultItems = [item1, item2, item3];

const workItems = [];

app.get("/", function(req, res) {

const day = date.getDate();
todo.find({}).then(function(foundItems){
  if(foundItems.length===0){
    todo.insertMany(defaultItems).then(function(){
      console.log("Sucessfully inserted");
    }
    ).catch(function(err){
      console.log(err);
    });
  res.redirect("/");
  }
  else{
    res.render("list", {listTitle:"Today", newListItems: foundItems});

  }
 
}).catch(function(err){
  console.log(err);
});

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
const listTitle=req.body.list;
  const item=new todo({
  name:itemName
});
if(listTitle==="Today"){

  item.save();
  res.redirect("/");
}
else{
  List.findOne({name:listTitle}).then(function(founded){
    founded.items.push(item);
    founded.save();
    res.redirect("/"+listTitle);
  })
}

});

app.get("/:customListItem",function(req,res){
  const customListItem=req.params.customListItem;
  
List.findOne({name:customListItem}).then(function(result){
  if(!result)
  {
  const list=new List({
    name:customListItem,
    items:defaultItems
  });
  list.save();
  res.redirect("/"+customListItem);
  }
  else
  res.render("list", {listTitle:result.name, newListItems:result.items});
}).catch(function(err){
  console.log(err);
})
});

app.get("/about", function(req, res){
  res.render("about");
});

app.post("/delete",function(req,res){
  const checkedItemId=req.body.checkbox;
  console.log(checkedItemId);
  todo.findByIdAndDelete(checkedItemId).then(function(){
    console.log("removed");
    res.redirect("/");
  }).catch(function(err){
    console.log(err);
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


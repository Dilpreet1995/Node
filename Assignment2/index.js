var express=require("express");
var bodyparser=require("body-parser");
var fs=require("fs");
var db=require("./input");
var app=express();
app.use(bodyparser.urlencoded());
app.use("/",express.static(__dirname+"/public"));
app.get("/api/todos",function (req,res) {
    res.json(db.TodoList);
});


app.get("/api/active",function (req,res) {

    res.json(db.ActivatedList);
});


app.get("/api/complete",function (req,res) {

    res.json(db.Completed);
});

app.get("/api/delete",function (req,res) {

    res.json(db.Deleted);
});

app.post("/api/todos/",function(req,res){

    var todo=req.body.todo_title;
   // console.log("dhefj"+todo);
    if(!todo ||todo==""||todo.trim()=="")
    {

        res.status(400).json({err:"Cannot add null value "});


    }
    else
    {
        var new_todo_object={title:todo,status:db.StatusEnums.Active};
        db.TodoList[db.NextTodo++] = new_todo_object;

        res.json(db.TodoList);
    }


});
app.delete("/api/todos/:id",function(req,res){

    var del_id=req.params.id;
    var todo=db.TodoList[del_id];

    if(!todo){res.status(400).json({err:"Does not exist"});}
    else{
        todo.status=db.StatusEnums.Deleted;
        res.json(db.TodoList);
    }


});
app.put("/api/todos/:id",function(req,res){

    var mod_id=req.params.id;
    var todo=db.TodoList[mod_id]
    if(!todo)
    {
        res.status(400).json({err:"cannot modify it since it does not exist"});
    }
    else{
        todo.status=db.StatusEnums.Complete;
        res.json(db.TodoList);
    }


});

app.put("/api/todos/complete/:id",function(req,res){

    var mod_id=req.params.id;
    var todo=db.TodoList[mod_id]
    if(!todo)
    {
        res.status(400).json({err:"cannot modify it since it does not exist"});
    }
    else{
        todo.status=db.StatusEnums.Complete;
        res.json(db.TodoList);
    }
});

app.put("/api/todos/active/:id",function(req,res){

    var mod_id=req.params.id;
    var todo=db.TodoList[mod_id]
    if(!todo)
    {
        res.status(400).json({err:"cannot modify it since it does not exist"});
    }
    else{
        todo.status=db.StatusEnums.Active;
        res.json(db.TodoList);
    }


});

app.listen(3000);
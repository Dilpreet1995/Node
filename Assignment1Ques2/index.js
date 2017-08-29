var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var fs=require("fs");
var morgan=require("morgan");
var path=require("path")
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.set("view engine","hbs")
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.use("/", bodyParser.urlencoded({extended:true}) );

app.use("/form", express.static(__dirname+"/assets/form.html"));




app.post("/submit", function(req, res) {

var start=Date.parse(req.body.Dob);
var end=new Date();
 end=Date.parse(end.toISOString().substring(0, 10));
    var timeDiff = end - start;
    daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


    res.render(
        "result",
        { message: "Hey "+req.body.firstname+"  you have lived on this planet for "+daysDiff+" days"});

});
function count_days(a,b){}
app.listen(3000);



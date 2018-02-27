var app = require('express')();
var ser = require('./app');
console.log("req received");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.post('/users',(req,res)=>{
    res.json({"data":"In Users"});
});
app.get('/emp',(req,res)=>{
    console.log("In Emp");
})
app.use('/',ser);
// (req,res,next)=>{
//   try{
//       res.locals.username = "surendra";
//       //req.locals.password = "sp";
//     //res.err("in route");
//     return next();
//   }
//   catch(error){
//       return next(error);
//   }
    
// })

app.use((req,res,next)=>{
    console.log("res username is " + res.locals.username);
   // console.log("pwd is " + req.locals.password);
    console.log("In first middelware");
    next();
})
app.use((req,res,next)=>{
    //console.lo
     console.log("In second middleware");
})
app.use(function(err, req, res, next) {
    // Do logging and user-friendly error message display
    //console.error(err);
    // Assuming that template engine is plugged in
    console.log('in error handler'+ err);
  });
app.listen(3000,(err,res) =>{
    if(err){
        console.log("Error whiel starting server");
    }
    else{
        console.log("Server started on ");
    }
})

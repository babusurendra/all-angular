var app = require('express')();
var ser = require('./app');
var multer = require('multer');
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo


/*  un comment below snippet
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    }
})

var upload = multer({ storage: storage }).single('userfile');   */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        console.log("File name is " + file.originalname);
      cb(null, file.originalname)
    }
  })
  var upload = multer({storage: storage}).single('userfile');
//var upload = multer({storage: DIR});
//console.log("req received");
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});
//   app.post('/upload', upload.single('userfile'), (req, res) => {
//     // here in the req.file you will have the uploaded avatar file
//  })
app.post('/upload', (req, res) => {
    console.log(req.headers.authorization);
    var path = '';
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // No error occured.
       // path = req.file.path;
        return res.json({"Upload Completed ":"True"});
    });

})
// app.post('/users',(req,res)=>{
//     res.json({"data":"In Users"});
// });
// app.get('/emp',(req,res)=>{
//     console.log("In Emp");
// })
//app.use('/',ser);
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

// app.use((req, res, next) => {
//     console.log("res username is " + res.locals.username);
//     // console.log("pwd is " + req.locals.password);
//     console.log("In first middelware");
//     next();
// })
// app.use((req, res, next) => {
//     //console.lo
//     console.log("In second middleware");
// })
app.use(function (err, req, res, next) {
    // Do logging and user-friendly error message display
    //console.error(err);
    // Assuming that template engine is plugged in
    console.log('in error handler' + err);
});
app.listen(3000, (err, res) => {
    if (err) {
        console.log("Error whiel starting server");
    }
    else {
        console.log("Server started on ");
    }
})

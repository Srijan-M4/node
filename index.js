// const http = require('http');

// const server = http.createServer((req, res)=> {
// console.log(req.headers);
// req.statusCode = 200;
// res.setHeader("Content-type", "text/html");
// res.end("<h1>HELLO WORLD</h1>");

// });
// server.listen(3000,"localhost",()=>{
//     console.log("Server is running at Local:3000");

// });


// const express = require("express");
// const PORT = 3000;

// const app = express();
// app.get('/', (req, res) =>{
//     res.send("Welcome to the task manager");
// });

// app.listen(PORT,()=>{
//     console.log(`App is running at localhost:${PORT}`);

// });


//get task
const express = require("express");
const mongoose = require("mongoose");
const Task = require('./models/tasks');
const taskRouter = require('./routes/tasks');
const auth = require ('./auth');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/users');
const url = 'mongodb://localhost:27017/demodb';
const PORT = 3000;
const app = express();
app.use(express.json());
 app.use(express.static(__dirname + "/public"));


mongoose.connect (url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false}).then((db)=>{
    console.log ("Successfully connected to Mongodb server");
    },(err) => console.log (err));

app.use('/users', userRouter);
app.use(auth); 
app.use('/tasks', taskRouter);
app.use ('/categories', categoryRouter);

app.listen(PORT,()=>{
    console.log(`App is running at localhost:${PORT}`);

}
);
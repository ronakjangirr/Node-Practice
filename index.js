// Topic- 1. Using app.js file data in index.js
// let app= require('./app');  // Import here file like this app is a filename require is a keyword and inside that file location

// console.log(app);           //Result- { x: 10, y: 20, z: [Function: z] }
// console.log(app.x);         //Result- { x: 10 }
// console.log(app.y);         //Result- { z: [Function: z] }


// -------------------------------------------------------------------------------------------------- //


// Topic- 2. Core Module- Core Module are 2 types Global and Non-Global
// Global like - console.log()
// Non-Global - fs -it means file system

// const fs=require('fs');               // This is Non-global Core module because we have to import it                           
// fs.writeFileSync("Hello.txt","Code step by step");   //  fs means file system and writeFileSync is pre-made function of fs and there are many functions it have. 
//                                                     // Hello.txt file will be automatically created and Code step by step data will be automatically print in it.                                      
// console.log("Hello");           // It is global and don't to export or import it and runs automatically.


// -------------------------------------------------------------------------------------------------- //


// Topic 3- Create Server

// const http= require('http')  // importing http it handles server response and request.

// http.createServer((req, resp)=>{           // It takes 2 parameter req and resp.     
//     resp.write("Hello this response");    // resp.write is sending the response to client side. We can also write ("<h1>Hello this response</h1>")      
//     resp.end();                 // It is used to end or stop the response otherwise response will be continously gonna send
// }).listen(4500);   // createServer is a premade function and listen is used to run serve we can run on any port.

// Now you can check the output - by node .\index.js and then run port on localhost:4500


// -------------------------------------------------------------------------------------------------- //


// Topic 4- Create Package.json file it stores details and project dependencies
// type npm init to install package.json then install any package after that node_modules

// Topic 5- How to ignore node_module for pushing on git-
// just create .gitignore file i root foleder and type /node_modules in ignore file
// Then How to install node_modele folder type npm install it will install your node_module folder automatically 


// Topic 6- Installing Nodemon- It is used to run automatic code without writing node .\index.js
// Steps- First install nodemon by- npm i nodemon -g  then only write once nodemon .\index.js once then it will run automatically 


// -------------------------------------------------------------------------------------------------- //

// Topic 7- Create Simple Api in Node
// const http = require('http');                                   // importing http it handles server response and request.       
// const data = require('./data');                                 // Importing data file                 
// http.createServer((req, resp)=>{
//     resp.writeHead(200,{'Content-Type':'appliaction\json'});    // This is Header and 200 is error type it means data send succesfully
//     resp.write(JSON.stringify(data));                           // data is used which is exported const data = require('./data');
//     resp.end();                                 // Response stoping
// }).listen(5000);

// Result- now check localhost:5000 we will get respone in json format which is present in data.js file.

// -------------------------------------------------------------------------------------------------- //

// Topic 8 - Installing Express Js and Making Web Pages By Node Js

// npm i express   - for installing package of express js

// const express = require('express');  // Importing Express or using Express
// const app = express();                // to makeexpress executiable we store in app variable

// Now we are making home page and other different Pages with the help of express or node js
//When we wants to load a web page at that time we use "get" method and other methods are used with api's
//Always remember methods will be change but 2 parameter will be same always (req,res)

// app.get('', (req, res) => {                 // get, put, delete etc these are a method (''=> is home page url, (req, res)=> it take 2 parameters  )
//     res.send('Hello, This is Home Page');       // send is also a method to send the response to user or client
// });

// app.get('/about', (req, res) => {                   //'/about' => Giving Urls to about us page 
//     res.send('Hello, This is About Us Page');
// });

// app.listen(5000);     // Used to call on 5000 port.


//Result- Check on Browser 2 pages will be made and run on different urls

// -------------------------------------------------------------------------------------------------- //

// Topic 9 - Getting Request by User and sending Response by server

// If we wants to send the request and query parameters (res.query.name) just type in url        localhost:5000/?name=anil
// Then we can see the request in terminal

// const express = require('express');  // Importing Express or using Express
// const app = express();                // to makeexpress executiable we store in app variable

// app.get('', (req, res) => {
//     console.log("Request By Browser", req.query.name);            // req.query.name    used to send the data to server                      
//     res.send('Hello, This is Home Page ==>>' + req.query.name);    // + req.query.name    to show the response use + and req.query.name       
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, This is About Us Page');
// });

// app.listen(5000);     // Used to call on 5000 port.



// -------------------------------------------------------------------------------------------------- //


// Topic 10 - Display h1 tags, links, input and object etc 


// const express = require('express');  // Importing Express or using Express
// const app = express();                // to makeexpress executiable we store in app variable

// app.get('', (req, res) => {
//     res.send(`<h1>Hello, This is Home Page ==>></h1> <a href="/about">Go to About Page</a>`);    // + req.query.name    to show the response use + and req.query.name       
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, This is About Us Page');
// });


// // Display Data in a Array of Object

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name:'Ronak',
//             phone:95262727
//         },
//         {
//             name:'Anil',
//             phone:9999999999
//         }
//     ]);
// });

// app.listen(5000);     // Used to call on 5000 port.


// -------------------------------------------------------------------------------------------------- //


// Topic 11 - Accessing the WebPages by creating folder and storing different pages in that 

// const express= require('express');
// const path = require('path');       //path module is used to access our folder path

// const app= express();
// const publicPath= path.join(__dirname,'public');  //path.join is used to join |  __dirname is used to find your root directory then we just have to add public folder in it.

// app.use(express.static(publicPath));            //use & static is a method of express js| static is used to load out static content | express.static(publicPath) it will load the path from publicPath

// app.listen(5000);

// Result-Now we can access the pages by typing localhost:5000/about.html  & localhost:5000/help.html


// -------------------------------------------------------------------------------------------------- //


// Topic 12 - Accessing the WebPages without writing extension about.html & making page 404 


// const express= require('express');
// const path = require('path');       //path module is used to access our folder path

// const app= express();
// const publicPath= path.join(__dirname,'public');  //path.join is used to join |  __dirname is used to find your root directory then we just have to add public folder in it.

// //app.use(express.static(publicPath));           // in this method we have to add extension at last about.html           

// app.get('', (_, res) => {
//     res.sendFile(`${publicPath}/index.html`);     // sendFile is used to load a method in a file      
// });

// app.get('/about', (_, res) => {
//     res.sendFile(`${publicPath}/about.html`);
// });

// app.get('/help', (_, res) => {
//     res.sendFile(`${publicPath}/help.html`);
// });

// app.get('*', (_, res) => {
//     res.sendFile(`${publicPath}/nopage.html`);
// });


// app.listen(5000);


// -------------------------------------------------------------------------------------------------- //


// Topic 13 - Middleware - It is used to access the request and response and modify it. Like Blocking some pages in particular countries or any other authentication.
// We have to type age andcheck the condition http://localhost:5000/?age=12

// const express = require('express');  
// const app = express();                

// const reqFilter=(req,resp,next)=>{                      // in middleware we have to add 3 parameters next is used the send or move forward to particular url 
//     if(!req.query.age)                          
//     {
//         resp.send("Please Provide Age")
//     }
//     else if(req.query.age<18)
//     {
//         resp.send("You cannot Access the Page")
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter)

// app.get('', (req, res) => {
//     res.send('Hello, This is Home Page You are Valid Now');          
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, This is About Us Page');
// });

// app.listen(5000);     // Used to call on 5000 port.


// -------------------------------------------------------------------------------------------------- //


// Topic 14 - Apply Middleware on single and group of Route.

// // 1. SINGLE PAGE -
// const express = require('express');  
// const app = express();                

// const reqFilter=(req,resp,next)=>{                      // in middleware we have to add 3 parameters next is used the send or move forward to particular url 
//     if(!req.query.age)                          
//     {
//         resp.send("Please Provide Age")
//     }
//     else if(req.query.age<18)
//     {
//         resp.send("You cannot Access the Page")
//     }
//     else{
//         next();
//     }
// }

// // app.use(reqFilter) -- Comment This

// app.get('', (req, res) => {
//     res.send('Hello, This is Home Page You are Valid Now');          
// });

// app.get('/about',reqFilter, (req, res) => {                 // use reqFilter here | We can use this on many routes 
//     res.send('Hello, This is About Us Page');
// });

// app.listen(5000);     // Used to call on 5000 port.


// 2. Group Of Route
// Just make a new file to store the middleware and import it in index.js


// const express = require('express');  
// const reqFilter= require('./middleware')             // importing middleware file 
// const app = express();                
// const route= express.Router()  // import Router for putting middleware

// route.use(reqFilter)   // use reqFilter like this

// app.get('', (req, res) => {
//     res.send('Hello, This is Home Page You are Valid Now');          
// });

// route.get('/about', (req, res) => {             // route.get will restrict the page                // use reqFilter here | We can use this on many routes 
//     res.send('Hello, This is About Us Page');
// });

// route.get('/help', (req, res) => {                 // use reqFilter here | We can use this on many routes 
//     res.send('Hello, This is Help Page');
// });

// app.use('/',route)                          // Add this Line also

// app.listen(5000);     // Used to call on 5000 port.

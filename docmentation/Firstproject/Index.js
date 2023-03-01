// READ JSON FILE 

const myname = require("./data")
console.log ("dshgfkh  jkdsxhzg;iueg;if" , myname)


// create server and send string data
//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + myname.myDateTime());
  res.end();
}).listen(8085);

// npm init used to make run time set envirnoment 
//npm init

//file sysytem  ---copy data
const fs = require('fs');
const data = fs.copyFileSync('chat.txt','addchat.txt');
console.log(data)

//file sysytem  ---readfile data
// const fs = require('fs');
// const data = fs.readFileSync('chat.txt','utf8');
// console.log(data)

//----->if not used utf-8 than its give binary data
//---->in copy if no file than async make its 
//---> ITS ALSO RETURN THE SAME DATA IN COPY FILE



//IF YOU INSTALL any package than you used npm install packagename
//like cors 
// const cors = require("cors");
//used this using documentation of that libraries
//LIKE IN THIS CASE
//first we install this using npm install librariesname than used this
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);



//url in its 
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
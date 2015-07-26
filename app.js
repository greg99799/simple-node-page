//Problem: We need a simple way to look at a user's badge count and Javascript points from a web browser
//Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

//1. Create a web server

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8000/');

//2. Handle HTTP route GET / and POST / i.e. Home 
  //if url = "/" && GET
    //show search 
  //if url = "/" && POST
    //redirect to /:username

//3. Handle HTTP route for GET /:username i.e. /greg99799
  //if url = "/..."
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

//4. Function that handle the reading of files and merge in values
  //read from file and get string
    //merge values into string
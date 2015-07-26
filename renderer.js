var fs = require('fs');

function view(templateName, values, response) {
  //Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html')
  //Insert values into content
    
  //Write out to response
  response.write(fileContents);

}    


module.exports.view = view
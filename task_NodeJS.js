var http = require('http');
var fs = require('fs');
var text = require('./text');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Create a file with the name demo.txt and write some contents to the file using NodeJS file module.

    fs.writeFile('./demo.txt', text(), function (err, data) {
        if (err)
            throw err;
    });

    // Read the content of created `demo.txt` file. Take an example: a file name is demo.txt and the content `Node.js is an open source server environment.`.    

    fs.readFile('./demo.txt', 'utf8', function (err, data) {
        if (err)
            return err;
        else
            console.log(data);
    });

    // Update the created `demo.txt`  file’s content of the file in NodeJs. For example, Append the `Node.js allows you to run JavaScript on the server.` in the file.

    var appendText = '\nNode.js allows you to run JavaScript on the server.';
    fs.appendFile('./demo.txt', appendText, function (err) {
        if (err)
            throw err;
        else
            console.log('Updated!');
    });

    // Rename the created file name. For example, `demo.txt` to `final-demo.txt`.

    fs.rename('./demo.txt', './final-demo.txt', function (err) {
        if (err)
            throw err;
        else
            console.log('Renamed!');
    });

    // Delete the created `demo.txt` file using NodeJS file module.
    fs.unlink('./demo.txt', function(err){
        console.log('Deleted!');
    });
});

server.listen(3000, '127.0.0.1');
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(function(request, response) {
    
		var ipaddress = request.headers["x-forwarded-for"];
		var language = request.acceptsLanguages()[0];
		var software = request.headers["user-agent"];
		var myRe =     /\((.+?)\)/;
        software = myRe.exec(software);
        software = software[1];

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify( { "ipaddress": ipaddress, "language": language, "software": software}));

});

app.listen(port, function () {
    console.log('Listening on port 8080...');
});


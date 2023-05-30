var http = require("http");
var app = require ("./config/express")();
var db = require("./config/database")

http.createServer(app).listen(app.get('port'),function(){
        console.log('Express Server escutando na porta' 
                + app.get('port'));



});

db("mongodb://localhost/sistemamatricula");
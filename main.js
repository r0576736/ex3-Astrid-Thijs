/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');               //express installeren via terminal
var bodyParser = require('body-parser');        //bodyparser installeren via terminal

var app = express();                            //extensie gebruiken als variabele

app.use (bodyParser.urlencoded({
       extended:true
}));

/* URL Encoded gebruiken we omdat niet alle tekens kunnen worden opgenomen in een querystring.
 * Dit rekenmachine bevat tekens zoals "=" die niet in de naam of in waarde van een parameter 
 * mogen worden opgenomen. Deze tekens en of spaties worden vervangen door '%' [ASCII code]. */

app.use (bodyParser.json());        //ontleed json applicatie


var object = [];                                        //uitkomstberekening

app.get("/", function(req, res){                        //html rekenmachine opvragen
        res.sendfile('./Rekenmachine.html');
});


app.post("/", function(req, res){                       //berekening uitvoeren in rekenmachine
    var calculate = req.body.result;
    var recalculate = eval(req.body.result); 

    object.push({"Berekening":  calculate,  "Resultaat": recalculate});
    console.log(recalculate);
    res.status(203).send(object);               
    
});

app.get("/object", function(req, res){                  //lijst van alle berekeningen 
    res.send(object);
});




app.listen(1234);                                       //rekenmachine draait op localhost:1234
console.log("Hello Astrid");                            //check


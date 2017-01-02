/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');               //express installeren via terminal
var bodyparser = require('body-parser');        //bodyparser installeren via terminal

var app = express();                            //extensie gebruiken als variabele

app.use (bodyparser.urlencoded({
       extended:true
}));

/* URL Encoded gebruiken we omdat niet alle tekens kunnen worden opgenomen in een querystring.
 * Dit rekenmachine bevat tekens zoals "=" die niet in de naam of in waarde van een parameter 
 * mogen worden opgenomen. Deze tekens en of spaties worden vervangen door '%' [ASCII code]. */




app.listen(123);

console.log("Hello Astrid");


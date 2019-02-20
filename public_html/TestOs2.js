/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var os = require('os');

var message = "This is a Script Running on Node.js  "+process.version+" on a "+
        os.type()+" based Operating system";

console.log(message);



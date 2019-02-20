/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var argv = require('optimist').argv;

for(var i=0;i<argv.times;i++){
    console.log(argv._[0]+ " On loop "+(i+1));
}



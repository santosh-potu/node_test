/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var argv = require('optimist').argv ,
    $ = require('jquery'),
        fs = require('fs') ;

var file = argv._[0];


var html = fs.readFileSync(file ,'UTF-8');
//console.log(html);
//process.exit();
$(html).find('p').each( function(index){
    
    var content = $(this).html();
    console.log(' Paragraph -> '+(index+1) + " Content "+content+"\n");
});


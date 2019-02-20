/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var rl= require('readline');

var prompts = rl.createInterface(process.stdin,process.stdout);

prompts.question("how many servings of fruits and vegitables do you eat each day?" ,function(servings){
    
var message = "";

if(servings < 5){
    message = "Since you are eating only "+servings+
            " !Right now you might want to eat "+(5-servings)+ " more";
}else{
    message = "Excellent your diet is on the track!";
}
console.log(message);
process.exit();

});



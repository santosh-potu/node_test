/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var parser = require('node-markdown');

var html = parser.Markdown('We are **using**  Markdown . It **help** us to display html');
console.log(html);




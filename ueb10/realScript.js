const fs = require('fs');
let sc = require('./the-movies/script.js');
let data = sc.readFile('./the-movies/data.json');
let data2 = sc.readFile('./the-movies/data2.json');

console.log(data, data2);
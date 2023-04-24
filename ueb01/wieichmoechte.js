/*
let obj = {
    name: "Hans Wurst",
    alter: 42
};
let attr = "name";
console.log(obj, JSON.stringify(obj));
let obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2, obj2[attr]);
*/


const fs = require('fs');

const text = fs.readFileSync('./readme.txt', {encoding: 'utf-8'});
console.log(text);

// hängt an die datei an
fs.appendFileSync('./readme.txt', text, {encoding: 'utf-8'});
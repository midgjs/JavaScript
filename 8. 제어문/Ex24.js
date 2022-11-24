//문자열 문자갯수 

var string = 'Hello World.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if(string[i] === search) count++;
}
console.log(count);
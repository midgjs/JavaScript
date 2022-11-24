//문자열 문자갯수 

var string = 'Hello World.';
var search = 'l';
var count1 = 0;
var count2 = 0;

for(var i=0; i<string.length; i++) {
    if(string[i] === search) {
        count1++;
        //code..
        //code..
        //code..
    }
}
console.log(count1);


for(var i=0; i<string.length; i++) {
    if(string[i] !== search) continue;

    count2++;
    //code..
    //code..
    //code..
}
console.log(count2);
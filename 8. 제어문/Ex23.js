//문자열 문자갯수 

var string = 'Hello World.';
var search = 'l';
var count = 0;

for(var i = 0; i < string.length; i++) {
    if(string[i] !== search) continue;
    count++; // continue문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 

//참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);
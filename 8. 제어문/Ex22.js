//문자열 인덱스찾기 -> break문으로


var string = 'Hello World.';
var search = 'l';
var index;

for(var i = 0; i < string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}

console.log(index);

//참고로 String.prototype.indexOf 메서드를 사용해도 같은동작
//console.log(string.indexOf(search));
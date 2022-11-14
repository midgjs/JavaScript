var binary = 0b01000001; //2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); //65
console.log(octal); //65
console.log(hex); //65

console.log(binary === octal); //true
console.log(octal === hex); //true

// 숫자타입 값 참조하면 모두 10진수로 해석
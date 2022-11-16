var x = '1';

console.log(+x); //1 숫자로 타입변환(새 값을 반환)
console.log(x); // "1";
console.log(typeof(x)); //string

x=true;
console.log(+x); //1 숫자로 타입변환(새 값을 반환)
console.log(x); // true
console.log(typeof(x)); //boolean

x=false;
console.log(+x); //0 숫자로 타입변환(새 값을 반환)
console.log(x); // false
console.log(typeof(x)); //boolean

x='Hello';
console.log(+x); // NaN
console.log(x); // "Hello";
console.log(typeof(x)); //string
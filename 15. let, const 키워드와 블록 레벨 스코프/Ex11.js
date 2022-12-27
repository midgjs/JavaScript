var x = 1;
y=2;

function foo() {}

console.log(window.x); //1
console.log(x); //1

console.log(window.y); //2
console.log(y); //2

console.log(window.foo); //f foo(){}
console.log(foo); //f foo(){}
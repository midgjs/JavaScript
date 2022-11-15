var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'Hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo); //null

foo = Symbol(); 
console.log(typeof foo); 

foo = {};
console.log(typeof foo);

foo = []; //배열
console.log(typeof foo); //object

foo = function() {}; //함수
console.log(typeof foo); // function
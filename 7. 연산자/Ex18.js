//Object.is()

Object.is(-0, +0); //false

console.log(Object.is(1+undefined, NaN)); //true 
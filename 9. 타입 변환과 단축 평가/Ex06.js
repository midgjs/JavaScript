(Symbol()) + '' // -> typeError: Cannot convert a Symbol value to a string

// ({}) + '' // "[object Object]"
// Math + '' // "[object Math]"
// [] + '' // ""
// [10, 20] + '' // "10,20"
// (function(){}) + '' // "function(){}"
// Array + '' // "function Array() { [native code] }"
//+ 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자
//나머지는 산술 연산자 --> 암묵적 타입 변환(타입 강제 변환) // 단점이 될 수 있다.

'1' + 2; //'12'
1+'2'; //'12'

1+2; //3
1+true; //2

1+false; //1

1+null //1 null->0으로 타입 변환.

//undegined는 숫자로 타입 변환되지 않는다.

+undefined; // NaN
1 + undefined; // NaN

console.log(+undefined);
console.log(1 + undefined);
var foo = 'Lee';

foo = null;

console.log(foo);

console.log(typeof(foo));

// 참고
// 단, typeof로 자료형을 확인할 때 object(객체)를 반환하는데, null이 빈 참조를 나타내는 데 자주 사용되기 때문이다.
// 그래서 원시 자료형으로 생각해도 되지만 엄밀히 말해서는 null은 객체이고 참조 자료형이다.
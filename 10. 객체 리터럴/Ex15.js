var person = {
    'last-name': 'Lee',
    1: 10
};

// person.'last-name'; 
 person.last-name; // 브라우저 -> NaN
                     // 노드 -> ReferenceError

// person[last-name];
person['last-name'];

// person.1;  error
// person.'1'; error
person[1]; //ok
person['1']; //ok
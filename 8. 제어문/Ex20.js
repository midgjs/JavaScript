foo: {
    console.log(1);
    //break; -> systax error
    break foo;
    console.log(2);
}

console.log('Done!');
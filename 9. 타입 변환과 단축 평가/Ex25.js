function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2

function getStringLength(str = '') {
    return str.length;
}

getStringLength(); // 0
getStringLength('hi'); // 2
function repeat(n, f) {
    for(var i = 0; i < n; i++) {
        f(i);
    }
}

// function logOdds(i) {
//     if(i%2) console.log(i);
// };

var logOdds = function(i) {
    if(i%2) console.log(i);
};

repeat(5, logOdds);
function factorial(n) {
    if(n <=1) return 1;

    var res = n;
    while(--n) res *= n;
    return res;
}
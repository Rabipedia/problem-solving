var rev = function(n){
    var digits = Math.log10(n) + 1;
    return helper(n, digits);
}

var helper = function(n, digits) {
    if(n%10 == n){
        return n;
    }
    var rem = n % 10;
    return rem * Math.pow(n, digits - 1) + helper(n/10, digits - 1);
}

console.log(rev(4624));
var Nto1 = function(n){
    if(n == 0){
        return;
    }
    console.log(n);
    return Nto1(n - 1);
}

console.log(Nto1(5))
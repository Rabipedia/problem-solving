var digitSum = function(n){
    if(n == 0){
        return 0;
    }
    return (n%10) + digitSum(n/10);
}

console.log(digitSum(52))
/*
1342. Number of Steps to Reduce a Number to Zero.


Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/



var numberOfSteps = function(num) {
    return helper(num, 0);
};

var helper = function(num, steps){
    if(num == 0){
        return steps;
    }
    if(num%2 == 0){
        return helper(num/2, steps + 1);
    }
    return helper(num - 1, steps + 1);
}

console.log(numberOfSteps(41));
// Find a number using linear search and recursion.

var arr = [3, 2, 1, 18, 9];

// Finding number.

var find = function(arr, target, index){
    if(index == arr.length - 1){
        return false;
    }
    return arr[index] == target || find(arr, target, index + 1)
}

// Finding the index of that number.

var findIndex = function(arr, target, index){
    if(index == arr.length){
        return -1;
    }
    if(arr[index] == target){
        return index;
    }
    else{
       return findIndex(arr, target, index + 1)
    } 
}


// Finding index number in reverse.
var findIndexLast = function(arr, target, index){
    if(index == -1){
        return -1;
    }
    if(arr[index] == target){
        return index;
    }
    else{
        return findIndexLast(arr, target, index - 1);
    }
}

console.log(find(arr, 18, 0));
console.log(findIndex(arr, 18, 0));
console.log(findIndexLast(arr, 18, arr.length-1));
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


// Adding the index in an array.
var list = new Array();
var findAllIndex = function(arr, target, index){
    if(index == arr.length){
        return;
    }
    if(arr[index] == target){
        list.push(index);
    }
    findAllIndex(arr, target, index+1);

}
findAllIndex(arr, 18, 0);

var list2 = new Array();
var findAllIndex2 = function(arr, target, index, list2){
    if(index == arr.length){
        return list2;
    }
    if(arr[index] == target){
        list2.push(index);
    }
    else{
        return findAllIndex2(arr, target, index+1, list2)
    }
}


console.log(find(arr, 18, 0));
console.log(findIndex(arr, 18, 0));
console.log(findIndexLast(arr, 18, arr.length-1));
console.log(list);
console.log(list2);
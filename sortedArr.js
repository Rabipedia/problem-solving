// Find if an array is sorted or not.

var arr = [1, 2, 3, 5, 6, 8];

var sorted = function(arr,index){
    if(index == arr.length -1){
        return true;
    }
    return arr[index] < arr[index + 1] && sorted(arr, index + 1);
}

console.log(sorted(arr, 0));
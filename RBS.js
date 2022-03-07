var arr = [5, 6, 7, 8, 9, 1, 2, 3];

var search = function(arr, target, s, e){
    if(s > e){
        return -1;
    }
    
    var mid = s + (e - s) / 2;
    if(arr[mid] == target){
        return mid;
    }
    if(arr[s] <= mid){
        if(target >= arr[s] && target <= arr[mid]){
            return search(arr, target, s, e = mid - 1);
        }
        else{
            return search(arr, target, s = mid + 1, e);
        }
    }
    if(target >= arr[mid] && target <= arr[end]){
        return search(arr, target, s = mid + 1, e);
    }
    else {
        return search(arr, target, s, e = mid - 1);
    }
}

console.log(search(arr, 7, 0, arr.length-1));
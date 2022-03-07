var arr = [5, 4, 3, 2, 1];

var mergeSort = function(arr){
   if(arr.length == 1){
       return arr;
   } 

   var mid = arr.length / 2;

   var left = mergeSort(arr.slice(0, mid));
   var right = mergeSort(arr.slice(mid, arr.length));

   return merge(left, right);
}

var merge = function(first, second){
    var mix = new Array();

    var i = 0;
    var j = 0;
    var k = 0;

    while(i < first.length && j < second.length){
        if(first[i] < second [j]){
            mix[k] = first[i];
            i++;
        }
         else{
             mix[k] = second[j];
             j++;
         }  
         k++;
    }

    while(i < first.length){
        mix[k] = second[i];
        i++;
        k++;
    }

    while(j < second.length){
        mix[k] = second[j];
        j++;
        k++;
    }

    return mix;
}

console.log(mergeSort(arr));
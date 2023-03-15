/* Binary Search algorithm*/

/* before the search the binary first sorting the array then only it wokring fine. */

/* thhis algorithm is used to reduce the time complexity of the program run*/

/* this method usually  run in divide the array should be two part based on the array length*/

function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    while(leftIndex >= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] === target){
            return middleIndex;
        } 
        if(arr[middleIndex] > target){
            leftIndex = middleIndex+1;
        }
        if(arr[middleIndex] < target){
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
}


/* linear search with recursive fucntion */
/* time complexcity of the linear is Big-O = log n + 1 */

function linearSearchRecursive(array,target){
    return searchRecursive(array,0,array.length,target);
}

function searchRecursive(array,left,right,target){
    if(left > right){
        return -1;
    }
    if(array[left] == target){
        return left;
    }
    if(array[right] == target){
        return right;
    }
    return searchRecursive(array,left+1,right-1,target);
}

let arr = [1,2,3,4,5,6,7,8,9];
/* Target */
let target = 8;

console.log(binarySearch(arr,8))
console.log(linearSearchRecursive(arr,target))

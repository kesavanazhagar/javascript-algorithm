/* linear searching algorithm */

/* this is most of the developer is know. it's actually run by the for loop.*/
/* time complexcity of the  linear is Big-O = n,Number of 
the data is the given variable based.*/

/* does not required before the starting the linear search array soriting.*/

function linearSearch(array,target){
    for(let i=0;i<array.length;i++){
     if( array[i] == target ){
        return i;
     }
     return -1;
    }
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

/* Given array */
let array = [1,2,3,4,5,6,7,8]
/* target */
let target = 8;

console.log(linearSearch(array,target));
console.log(linearSearchRecursive(array,target))
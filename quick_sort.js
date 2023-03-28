/* Quick Sorting algorithm */

/* 
    this method select one element of the array.that element is called as the 
    Pivot.Pivot element is nothing but first element of the array and last element of 
    add its divided by 2. 
*/

/* Both average and Best time complexity of the Big-O (n logn) */
/* Worst time complexity of the Big-O (n*2) */


function recursiveSort(array){
    if(array.length <=1 ){
    return arr
    }

    let leftArray = [];
    let rightArray = [];
    let pivot = array[array.length-1];
    for(let i = 0;i<array.length-1;i++){
        if(arr[i] < pivot){
        leftArray.push(array[i]);
        }
        if(array[i] > pivot){
            rightArray.push(array[i]);
        }
    }

    return [...recursiveSort(leftArray),pivot,...recursiveSort(rightArray)]
}

/* array */

let array = [3,2,4,1,6,8,9,10];
console.log(recursiveSort(array));

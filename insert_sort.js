/* Insert sort algorithm */

/* 
    this method select one element of the array and that element compare the with other 
    element of the array. insert or swap the value of the position.
*/

/* best time complexity of the Insertsorting is Big-O(n) */
/* worst time complexity of the Insertsorting is Big-O(n*2) */


function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let j = i-1;
        let currentElement = arr[i];
        while(j >= 0 && arr[j] > currentElement){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentElement;
    }
    return arr
}

/* Arrray value */

let array = [3,2,4,1,6,8,9,10];


console.log(insertSort(array));
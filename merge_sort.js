/*  Merge Sorting algorithm  */

/* Most of developer used in sorting algrathm is merge sort  */

/* best Case time complexity is B- O(n2) */
/* average Case time complexity is B-  O(n log n) */

/* The merge sort working like split Array is two parts. */

function mergeSort(array){
    /* check the array length lessthen 2 Not recuired for sort. */
    if(array.length <2){
        return array
    }

    /* Find the middle index of the array */
    let middle = Math.floor(array.length/2);
    /* Split in two part based on the Middle index  one part is left Side array*/
    let leftArray = array.splice(0,middle);

    /* Recursive method based split the array.*/
    return merge(mergeSort(leftArray),mergeSort(array))
}

/* merge the splited array and compare the all the array. */
function merge(leftArr,rightArr){
    /* temporary sorted array stored. */
    let Sorted = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            Sorted.push(leftArr.shift())
        }else{
            Sorted.push(rightArr.shift())
        }
    }
    /* return the sort array */
    return [...Sorted,...leftArr,...rightArr];
}



const array = [3,2,4,1,6,8,9,10];
console.log(mergeSort(array))

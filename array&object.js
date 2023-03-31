/* js data structure the object is key value pair of the data is called as the Object.*/
/* Time complexity of the access to object,add,delete everything is Big-O (1) or constent */
/* search the object time complexity is is Big-O (n) or linear */
/*
 Object.Keys() is return the keys in Array format and Object.values() is return the 
    value in Array fromat. Time complexity of the both Object.keys() and Object.values() is 
    Big-O (n) or linear.
*/
const obj = {
    name:'raj',
    age:34,
    GetName : function(){
        return this.name; //return the function of the name key of the object.
    }
}
obj.education = 'B.E'; //add the new keys and value pair using the .(dout) with object name.
delete obj.age; //delete the object value using hte delete keys word.


console.log(Object.keys(obj)) //Return the keys present in the object using the Object.keys();
// ex : ['name',GetName,education];
console.log(Object.values(obj)) // Return the value present in the object using the Object.values()
// ex: ['raj',[Function: GetName],'B.E']
console.log(obj.GetName());
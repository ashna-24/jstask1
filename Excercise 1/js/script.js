let array= ["apple", "banana", "mango"];
let array2 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}];
let object = {
    fruit1: 'apple',
    fruit2: 'banana',
    fruit3: 'mango'
};

//array using forEach
array.forEach((val)=> console.log("Array :",val));   

//array using for...in loop
for(i in array){
    console.log("for...in array :",array[i]);
}

//array using for...of loop
for(i of array){
    console.log("for...of array :",i);
}

//array of objects
array2.forEach( objarray=> {
    for(const value in objarray){
        console.log("Array object :",`${objarray[value]}`);
    }
});

//objects
for(const key in object){
    let value= object[key];
    console.log("Object :",value);
}

let array= ["apple", "banana", "mango"];
let array2 = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}];
let object = {
    fruit1: 'apple',
    fruit2: 'banana',
    fruit3: 'mango'
};

//array
array.forEach((val)=> console.log("Array :",val));   

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

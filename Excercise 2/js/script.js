const title = (function details(){
    text="Loading User Details...";
    console.log(text);
    return text;
})();

const message = (fName, lName)=>{
    let message = "Hi, My name is ";
    let result = `${message} ${fName} ${lName}`
    console.log(result);
};
message("Ashna", "Meenu");
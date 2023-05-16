function expression(){  
    const text = document.getElementById("text").value;
    const result = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
    console.log(result);
}
function valueexpression(){
    let expression = document.getElementById('expression').value;
    let plus = expression.replace("plus","+");
    let minus = plus.replace("minus", "-");
    let multiply = minus.replace("multiply","*");
    let division = multiply.replace("division", "/");
    let modules = division.replace("modules","%");
    let evaluatedResult = eval(modules);
    console.log(evaluatedResult);
}
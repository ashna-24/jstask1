var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
]

data.forEach( objarray=> {
    for(const value in objarray){
        let result = objarray[value];
        let resarray = new Array(result).toString();
        console.log(resarray); 
    }

    const trimArray = resarray.map(element => {
        return element.trim();
    });
});
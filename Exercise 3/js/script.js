var data = [
    {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245", "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
    {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245", "zip": " 7001 4", "age": 32, "id": "5 648"}
];

for(let i in data){
    let result = data[i];
    
    result["Name:"]=(result["firstname"]+""+result["lastname"]).trim();
    console.log("Name:",result["Name:"]);

    if(result["phone"].length == 10){
        console.log("Phone:",result["phone"]);
    }
    else if(result["phone"].length < 10){
        console.log("Phone:",result["phone"].padStart(10, '0'));
    }
    else{
        console.log("Phone:",(result["phone"]).slice(0,10));
    }

    if((result["age"]>=150)){
        result["age"] = result["age"].toString().replace(result["age"],"NA");
        console.log("Age:",result["age"]);
    }
    else{
        console.log("Age:",result["age"]);
    }

    result["id"] = result["id"].slice(3).padStart(result["id"].length,'#').trim();
    console.log("Id:",result["id"]);
}
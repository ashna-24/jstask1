function expression(){  
    const text = document.getElementById("text").value;
    capitaltext(text);
}

function capitaltext(text){
    let sentance = text.toLowerCase().split(/[!.?] /).map( s => 
        s.charAt(0).toUpperCase() + s.substring(1)).join('. ');
    console.log(sentance);
}
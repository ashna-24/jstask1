function dateval(){
    var todaydate = new Date();
    var daydd = todaydate.getDate();
    var daymm = todaydate.getMonth()+1;
    var dayyyyy = todaydate.getFullYear();
    if(daydd < 10){
        daydd = '0' + daydd;
    }
    if(daymm < 10){
        daymm = '0'+ daymm;
    }

    var randdate = new Date(document.getElementById('date').value);
    var dateday = randdate.getDate();
    var datemonth = randdate.getMonth()+1;
    var dateyear = randdate.getFullYear();
    if(dateday < 10){
        dateday = '0' + dateday;
    }
    if(datemonth < 10){
        datemonth = '0'+ datemonth;
    }

    if(dayyyyy == dateyear){
        if(daymm == datemonth){
            if(daydd == dateday){
                alert('Today');
            }
            else if(daydd > dateday){
                alert('Day before today');
            }
            else{
                alert('Day after today');
            }
        }
        else if(daymm > datemonth){
            alert('Day before today');
        }
        else{
            alert('Day after today');
        }
    }
    else if(dayyyyy > dateyear){
        alert('Day before today');
    }
    else{
        alert('Day after today');
    }
}
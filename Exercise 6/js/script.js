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
    var today = daydd + "/" + daymm + "/" + dayyyyy;
    console.log(today);
    var randdate = new Date(document.getElementById('date').value);
    console.log(randdate);
    var dateday = randdate.getDate();
    var datemonth = randdate.getMonth()+1;
    var dateyear = randdate.getFullYear();
    var wholedate = dateday + "/" + datemonth + "/" + dateyear;
    console.log(wholedate)
    if(today < wholedate){
        alert('Day After today');
    }
    else{
        alert('Day before today');
    }

}
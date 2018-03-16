function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('footer__time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

/*function startTime() {
var x = new Date()
var x1=x.getDate() + "/" + x.getMonth() + "/" + x.getYear(); 
x1 = x1 + " - " + x.getHours( )+ ":" + x.getMinutes();
document.getElementById('footTime').innerHTML = x1;
}*/
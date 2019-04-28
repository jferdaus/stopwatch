


second = 0;
minute = 0 ;
hour = 0;

function start(){

second++;

if(second<60 ){

document.getElementById("ss").innerHTML = second;
}

else if (minute < 60)
{

minute++;

document.getElementById("mm").innerHTML = minute ;
second=0;
document.getElementById("ss").innerHTML = second;

}


else if (hour < 60)
{

hour++;
document.getElementById("hh").innerHTML = hour ;

minute=0;
document.getElementById("mm").innerHTML = minute;


second=0;
document.getElementById("ss").innerHTML = second;

}



s = setTimeout("start()", 1000);






}



function pause(){
if(second>0 ||  minute >0 || hour>0)
{clearTimeout(s);
document.getElementById("start").innerHTML = "Resume";
document.getElementById("start").style.color = "white" ;
document.getElementById("start").style.background = "#669999" ;
}

}

function stop(){
clearTimeout(s);
second = minute = hour =0 ;
document.getElementById("ss").innerHTML = "00";
document.getElementById("mm").innerHTML = "00";
document.getElementById("hh").innerHTML = "00";

document.getElementById("start").innerHTML = "Start";
document.getElementById("start").style.color = "white" ;
document.getElementById("start").style.background = "#003300" ;

}



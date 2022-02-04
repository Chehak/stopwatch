// create onload function 
// getelements by id from html file 
// create functions for buttons for button-satt , button-stop, button-reset 
// set interval and clearintervals
//create logic for timer , starts from seconds setInterval with one second 
// when second is >59 then minute=1 and so on. 

window.onload= function(){

    var seconds = 00;
    var minutes=00;
    var appendSeconds = document.getElementById('seconds');
    var appendMinutes = document.getElementById('minutes');
    var buttonStart= document.getElementById('button-start');
    var buttonStop= document.getElementById('button-stop');
    var buttonReset= document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick=function(){
        clearInterval(Interval);
       Interval = setInterval(setTimer,400);
    }
    buttonStop.onclick=function(){
        clearInterval(Interval);
    }
    buttonReset.onclick=function(){
        clearInterval(Interval);
        seconds=00;
        minutes=00;
        appendSeconds.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;
    }

    function setTimer(){
        seconds++;
        if(seconds<9){
            appendSeconds.innerHTML="0"+seconds;
        }
        if(seconds>9){
            appendSeconds.innerHTML= seconds;
        }
        if(seconds>59){
            minutes++;
            appendMinutes.innerHTML="0"+minutes;
            seconds=00;
        }
    }
}
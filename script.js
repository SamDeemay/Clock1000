//This variable is special (it does nothing)
var i = 0;
var hours = 1000;
var minutes = 0;
var seconds = 0;
var stop = false;


//If the sconds ar '9' it will be written as '09'
function check1Digit(num){
    if (num < 10){
        return "0" + num;
    }else{
        return num;
    }
}


function less1Second(){
    if (seconds == 0){
        if(minutes == 0){
            hours--;
            minutes = 59;
            seconds = 59;
        }else{
            minutes--;
            seconds = 59;
        }
    }else{
        seconds--;
    }
    document.getElementById("tempoOra").innerHTML = hours;
    document.getElementById("tempoMinSec").innerHTML = check1Digit(minutes) + ":" + check1Digit(seconds);
}

/*
function stopTime(){
    stop = true;
}
*/

//Javascript web API for time
function timeCycle(){
    var intervalId = setInterval(function() {
        if (stop == false){
            less1Second();
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
    document.getElementById("go").disabled = true;
}

function play(){
    stop = !stop;
    if (stop == true){
        window.alert("The clock is stopped");
    }else{
        window.alert("The clock is running");
    }

    if (stop == false){
        timeCycle();
    }
}



/*
          __
         /  \
        |    |
      --:'''':--
        :'_' :
        _:"":\___
     '  /\/\  `  /
     (/\  /\/\ /\)
     `\/\  /\/\'
       `\\//\\/'
         /\\\/\
         /\\\/\
        '  `  '
*/


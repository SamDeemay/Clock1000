//This variable is special (it does nothing)
var i = 0;
var hours = 1000;
var minutes = 0;
var seconds = 0;
var decisecond = 0;
var ms = 0;
var stop = true;


//If the sconds ar '9' it will be written as '09'
function check1Digit(num){
    if (num < 10){
        return "0" + num;
    }else{
        return num;
    }
}
function less1Second(){
    if(ms == 0){
        if (seconds == 0){
            if(minutes == 0){
                hours--;
                minutes = 59;
                seconds = 59;
                ms = 99
            }else{
                minutes--;
                seconds = 59;
                ms = 99
            }
        }else{
            seconds--;
            ms = 99
        }
    }else{
        ms--;
    }
    
    document.getElementById("tempoOra").innerHTML = hours;
    document.getElementById("tempoMinSec").innerHTML = check1Digit(minutes) + ":" + check1Digit(seconds) + ":" + check1Digit(ms);
}


//Javascript web API for time
function timeCycle(){
    var intervalId = setInterval(function() {
        if (stop == false){
            less1Second();
        } else {
            clearInterval(intervalId);
        }
    }, 1);
    document.getElementById("go").disabled = true;
}

function play(){
    stop = !stop;
    
    if (stop == true){
        window.alert("The clock has been stopped");
    }else{
        window.alert("The clock is running");
    }

    if (stop == false){
        timeCycle();
    }
}


function saveButton(){
    window.alert("NOTHING (for the moment)");
}
/*
\n                       /)
\n              /\___/\ ((
\n              \`@_@'/  ))
\n              {_:Y:.}_//
\n   ----------{_}^-'{_}----------
*/




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

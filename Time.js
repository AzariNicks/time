var firstLineData = document.getElementById("firstLine")
var secondLineData = document.getElementById("secondLine")
var current = new Date();
var todaysDay = "Monday"
switch (current.getDay()) {
    case 0: {
        todaysDay = "Sunday"
    }
    break;
    case 1 : {
        todaysDay  = "Monday"
    }
    break; 
    case 2 : {
        todaysDay = "Tuesday"
    }
    break; 
    case 3 : {
        todaysDay = "Wednesday"
    }
    break; 
    case 4 : {
        todaysDay  = "Thursday"
    }
    break; 
    case 5 : {
        todaysDay = "Friday"
        // console.log("helloooo")

    }
    break;
    case 6 : {
        todaysDay  = "Saturday"
    }
 
    default:
        break;
}
var isNight = false
var hour = ""
var mins = ""
if(current.getHours() > 12){
isNight = true
hour = (current.getHours() - 12).toString()
// this code is to make sure we dont pass a 12 hour night sceduel  
} else {
    hour = current.getHours().toString()
} 
if(current.getMinutes() < 10){
    mins = "0" + current.getMinutes().toString()
} else {
    mins = current.getMinutes().toString()
}

var currentTime = hour + ":" + mins 
if(isNight) {
    pmOrAm = " p.m"
}
else {
    pmOrAm = " a.m "
}
// console.log(current.getHours())
// console.log(current.getMinutes())

firstLineData.innerText = "Today is a lovely " + todaysDay 
secondLineData.innerText = "And the time is " + currentTime + pmOrAm

// this says that every 5 seconds do this 
// the task is actually to ask for the Date again and update it every 5 Seconds 
setInterval(function(){ 
    // so it gets a new date which works for minutes 
    var everySecondCurr = new Date();
    // now we just have to repeat the code but call all the variables S at the end 
    // so they arent the same i dont need to do this but its better than not 
    var isNightS = false
    var hourS = ""
    var minsS = ""
    var pmOrAmS = ""
    if(current.getHours() > 12){
        isNightS = true
        hourS = (everySecondCurr.getHours() - 12).toString()
        // this code is to make sure we dont pass a 12 hour night sceduel  
        } else {
            isNightS = false
            hourS = everySecondCurr.getHours().toString()
        } 
        if(current.getMinutes() < 10){
            minsS = "0" + everySecondCurr.getMinutes().toString()
        } else {
            minsS = everySecondCurr.getMinutes().toString()
        }
        if(isNightS) {
            pmOrAmS = " p.m"
        }
        else {
            pmOrAmS = " a.m "
        }

        var currentTimeS = hourS + ":" + minsS + pmOrAmS
        // console.log(currentTimeS)
        secondLineData.innerText = "And the time is " + currentTimeS 
     

  
    // console.log(current.getSeconds())
}, 5000);

// intervalId



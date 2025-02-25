$(document).ready(function() {
    let tInterval;//this is the varable that we use that if the timer is running it will use the set Interval function to this varable 
    let running = false;//tthis is checking if the timer is running or not
    var seconds = 0;//seconds present and it is 0 since in the html we set the display to 0
    var minutes = 0;//minutes present and it is 0 since in the html we set the display to 0
    var hours = 0;//hours present and it is 0 since in the html we set the display to 0
    var milliseconds = 0;//milliseconds present and it is 0 since in the html we set the display to 0


    //function to format the time given 
    function formating(s, m, h, milliseconds) { //takes in the parameters of second minutes hours 
        s = (s < 10) ? "0" + s : s; //here it checks if all of them are less than 10 and then would add a 0 in front of them so that it becomes a two-digit number 
        m = (m < 10) ? "0" + m : m;
        h = (h < 10) ? "0" + h : h;
        milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds; // Format milliseconds to two digits since that is how the stopwatch is formated e.g 5= 05
        return h + ':' + m + ':' + s + '.' + milliseconds; //return the formatted time
    } 

    $('#go').click(function() {
        if (running) {//check if it is running 
            clearInterval(tInterval);//stops the timer
            $(this).text('Start');//changes the text to start to show to the user 
            running = false;//makes sure that the timer is not running
            seconds = 0;
            minutes = 0;
            hours = 0;
            milliseconds = 0;
            $('#output').text(formating(seconds, minutes, hours, milliseconds));
        } else {
            tInterval = setInterval(function() {//makes the interval function for the timer to run on 
                milliseconds++;//starts out with counting milliseconds 
                if (milliseconds === 100) {//then when it hits the max amount of milliseconds it will then go into this statement 
                    milliseconds = 0;//makes sure that the milliseconds will become 0
                    seconds++;//starts the counting of seconds 
                }
                if (seconds === 60) {//checks if the seconds reaches the max 
                    seconds = 0;//make sure that after that the seconds can not reach over 60
                    minutes++;//starts the counting of minutes
                }
                if (minutes === 60) {//checks if the minutes reaches the max
                    minutes = 0;//make sure that after that the minutes can not reach over 60
                    hours++;////starts the counting of hours
                }
                $('#output').text(formating(seconds, minutes, hours, milliseconds));
            }, 10);
            $(this).text('Stop');//changes the text of go to shwo stop to the user to tell them that they can stop the timer with the same button 
            $('#pause').text('Pause');//changes the text of pause to show that the user can pause the timer
            running = true;//makes sure to show the the timmer is running 
        }
    });
    $("#pause").click(function() {
        if (running) {//checks if the timer is running 
            clearInterval(tInterval);//stops the timer
            $(this).text('Resume');//changes the text of the button to show that the user can resume the timer
            running = false;//makes sure that the timer is not running 
            checking();//calls the function checking to check if the timer is at 5 seconds
        } else {
            tInterval = setInterval(function() {//makes the intervbal function for the timer to run on 
                milliseconds++;//starts out with countigng millisecnds 
                if (milliseconds === 100) {//then when it hits the max amount of mulliseconts it will then go into this statement 
                    milliseconds = 0;//makes sure that the miliseconds will become 0
                    seconds++;//starts the counting of seconds 
                }
                if (seconds === 60) {//checks if the seconds reaches the max 
                    seconds = 0;//make sure that after that the seconds can not reach over 60
                    minutes++;//starts the counting of minutes
                }
                if (minutes === 60) {//checks if the minutes reaches the max
                    minutes = 0;//make sure that after that the minutes can not reach over 60
                    hours++;////starts the counting of hours
                }
                $('#output').text(formating(seconds, minutes, hours, milliseconds));
            }, 10);
            $(this).text('Pause');//changes the text of the button to show that the user can pause the timer
            $('#go').text('Stop');//changes the text of the button to show that the user can stop the timer
            running = true;//makes sure to show the the timmer is running 
        }
    });
    function checking(){
        if (seconds === 5 && milliseconds === 0) {
           $('#output').text('5:00:00.00');
        } else {
            var differenceSeconds = 5 - seconds;
            var differenceMilliseconds = 0 - milliseconds;
            var difference = formating(differenceSeconds, 0, 0, differenceMilliseconds);
            $('#difference').text("You are " + difference + " seconds off");
        }
    }
    
});
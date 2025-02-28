$(document).ready(function() {
    let tInterval;
    let running = false;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var milliseconds = 0;
    let lap = 1;

    function formating(s, m, h, milliseconds) {
        s = (s < 10) ? "0" + s : s; //this is formattign the number so that it looks liek a timer that why it has to check if it is less than ten so that it can make sure that it is a oen digit number 
        m = (m < 10) ? "0" + m : m;
        h = (h < 10) ? "0" + h : h;//eg 5 = 05
        milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;//this is formattign the number so that it looks liek a timer that why it has to check if it is less than ten so that it can make sure that it is a oen digit number
        return h + ':' + m + ':' + s + '.' + milliseconds;
    }

    $('#go').click(function() {
        if (running) {
            clearInterval(tInterval);
            $(this).text('Start');
            running = false;
            $("#pause").text('Clear');
            checking();
            
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
            running = true;//makes sure to show the the timmer is running 
            $("#pause").text('Lap');//chaqnges the text of the pause button to show that the user can hit the lap button
        }
    });
    $("#pause").click(function() {
        if (running === false) {//checks if the timer is  not running
            seconds = 0;
            minutes = 0;
            hours = 0;
            milliseconds = 0;
            $('#output').text(formating(seconds, minutes, hours, milliseconds));
            $("#lap").empty();//clear the lap when it is hit only when it knows that the timer is not running 
        } else {
            $("#lap").append('<li>' + 'Lap ' + lap + '</li>');
            $('#lap').append('<li>' + formating(seconds, minutes, hours, milliseconds) + '</li>');
            running = true;//makes sure to show the the timmer is running 
            lap++;
        }
    });
    function checking(){
        if (seconds === 5 && milliseconds === 0) {
           $('#output').text('50.00');
        } else {
            var differenceSeconds = 5 - seconds;
            var differenceMilliseconds = 0 - milliseconds;
            var difference = formating(differenceSeconds, 0, 0, differenceMilliseconds);
            $('#difference').text("You are " + difference + " seconds off");
        }
    }
    
});
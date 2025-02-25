$(document).ready(function() {
    let startTime;
    let updatedTime;
    let difference;
    let tInterval;
    let running = false;

    $('#go').click(function() {
        if (running = false) {
            startTime = new Date().getTime();
            tInterval = setInterval(time, 1);
            running = true;
            console.log(tInterval)

        } else {
            if(running = true){
                document.getElementById('result').innerHTML = tInterval;
                clearInterval(tInterval);
                running = false;
                $('#go').text('Click me');
            }
        }
    });

    function time() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((difference % 1000));

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

                $('#output').text(hours + ':' + minutes + ':' + seconds + '.' + milliseconds);
            }
        });
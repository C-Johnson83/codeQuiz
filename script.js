// Set query variables
var qstn = document.querySelector("#intro");
var message = document.querySelector("#message");
var subButton = document.querySelector("#start");
var myDiv = document.getElementById("form");
var qBtn1 = document.createElement('button')
qBtn1.setAttribute("id", "b1")
var qBtn2 = document.createElement('button')
qBtn2.setAttribute("id", "b2")
var qBtn3 = document.createElement('button')
qBtn3.setAttribute("id", "b3")
var qBtn4 = document.createElement('button')
qBtn4.setAttribute("id", "b4")
var i = 0;
var score = 0;
var timer = document.querySelector("#timer");
var timeLeft = 5;
// Set question and answer array

var questionArray = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: '3'
    },
    {
        question: "The condition in an if / else statement is enclosed with _____",
        answers: {
            1: "quotes",
            2: "parenthesis",
            3: "curly brackets",
            4: "square brackets"
        },
        correctAnswer: '2'
    },
    {
        question: "Arrays in JavaScript can be used to store _____",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: '4'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: '3'
    },
    {
        question: " A very useful tool used during development and debugging for printing content to the debugger is :",
        answers: {
            1: "console.log",
            2: "terminal/bash",
            3: "for loops",
            4: "JavaScript"
        },
        correctAnswer: '1'
    },
];
function countdown(event) {
    event.preventDefault;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timer` to an empty string
            timer.textContent = '0 seconds remaining';
            qstn.textContent = "All done!";
            message.textContent = "your final score is " + score;
            myDiv.removeChild(qBtn1);
            myDiv.removeChild(qBtn2);
            myDiv.removeChild(qBtn3);
            myDiv.removeChild(qBtn4);
            
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function

        }
    }, 1000);
}
// set starting values for text elements
qstn.textContent = "Coding Quiz Challenge";
message.textContent = "Try to answer the following code related questions within the time limit.\n\nKeep in mind that incorrect answers will penalize your score/time by 10 seconds";
subButton.addEventListener("click", countdown);
addEventListener("click", questionTime);



function questionTime(event) {
    myDiv.appendChild(qBtn1);
    myDiv.appendChild(qBtn2);
    myDiv.appendChild(qBtn3);
    myDiv.appendChild(qBtn4);
    subButton.setAttribute("hidden", 'true')
    event.preventDefault();

    // Prevent default action

    console.log(event);

    qstn.textContent = questionArray[i].question;
    message.textContent = "";
    qBtn1.textContent = questionArray[i].answers[1];
    qBtn2.textContent = questionArray[i].answers[2];
    qBtn3.textContent = questionArray[i].answers[3];
    qBtn4.textContent = questionArray[i].answers[4];
    console.log(i)
    i++;


    if (i == 5) {


        qstn.textContent = "All done!";
        message.textContent = "your final score is " + score;
        myDiv.removeChild(qBtn1);
        myDiv.removeChild(qBtn2);
        myDiv.removeChild(qBtn3);
        myDiv.removeChild(qBtn4);

    }
}
;

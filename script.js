// Set query variables
var qstn = document.querySelector("#intro");
var message = document.querySelector("#message");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("#submit");
var input = document.querySelector('#inputBar');
var formDiv = document.getElementById("form");
var buttonDiv = document.getElementById("section");
var qBtn1 = document.createElement('button')
qBtn1.setAttribute("id", "b1")
var qBtn2 = document.createElement('button')
qBtn2.setAttribute("id", "b2")
var qBtn3 = document.createElement('button')
qBtn3.setAttribute("id", "b3")
var qBtn4 = document.createElement('button')
qBtn4.setAttribute("id", "b4")
var answerArray = ["Start Quiz", "JavaScript", "Cascading Style Sheets", "<ul>", "link", "color", "alerts", "parenthesis", "all of the above", "quotes", "console.log"];


var i = 0;
var score = 0;
var timer = document.querySelector("#timer");
var timeLeft = 60;
var timeInterval
// Set question and answer array

var questionArray = [
    {
        question: "What programming language is commonly used for adding interactivity to web pages? ",
        answers: {
            1: " JavaScript",
            2: "HTML",
            3: "CSS",
            4: "Python"

        }
    },
    {
        question: "What does CSS stand for? ",
        answers: {
            1: "Cascading Style Symbols",
            2: "Content Structuring System",
            3: "Cascading Scripting Syntax",
            4: "Cascading Style Sheets"
        }
    },
    {
        question: "Which HTML tag is used to create an unordered list? ",
        answers: {
            2: "<ol>",
            1: "<ul>",
            3: "<li>",
            4: "<dl>"
        }
    },
    {
        question: "What is the purpose of the HTML <a> tag? ",
        answers: {
            1: "link",
            2: "image",
            3: "heading",
            4: "paragraph"
        }
    },
    {
        question: "Which CSS property is used to change the text color of an element? ",
        answers: {
            1: "text-color",
            2: "font-size",
            3: "background-color",
            4: "color"
        }
    },
    {
        question: "Commonly used data types DO Not Include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        }
    },
    {
        question: "The condition in an if / else statement is enclosed with _____",
        answers: {
            1: "quotes",
            2: "parenthesis",
            3: "curly brackets",
            4: "square brackets"
        }
    },
    {
        question: "Arrays in JavaScript can be used to store _____",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        }
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        }
    },
    {
        question: " A very useful tool used during development and debugging for printing content to the debugger is :",
        answers: {
            1: "console.log",
            2: "terminal/bash",
            3: "for loops",
            4: "JavaScript"
        }
    },
    {
        question: " end",
        answers: {
            1: "wont see this",

        }
    },
];
function countdown(event) {
    event.preventDefault();

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
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
            timer.textContent = '0 seconds remaining\nThe time ran out!';
            qstn.textContent = "All done!";
            message.textContent = "your final score is\n" + score + " out of 100";
            formDiv.removeChild(qBtn1);
            formDiv.removeChild(qBtn2);
            formDiv.removeChild(qBtn3);
            formDiv.removeChild(qBtn4);
            formDiv.appendChild(input);
            submitButton.hidden = false
            input.hidden = false
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function

        }
    }, 1000);
}
// set starting values for text elements
timer.textContent = timeLeft + " seconds for the test"
qstn.textContent = "Coding Quiz Challenge";
message.textContent = "Try to answer the following code related questions within the time limit.\n\nKeep in mind that incorrect answers will penalize your score/time by 5 seconds";
startButton.addEventListener("click", countdown)
startButton.addEventListener("click", questionTime);
submitButton.addEventListener("click",)
qBtn1.addEventListener("click", questionTime);
qBtn2.addEventListener("click", questionTime);
qBtn3.addEventListener("click", questionTime);
qBtn4.addEventListener("click", questionTime);


function questionTime(event) {
    formDiv.appendChild(qBtn1);
    formDiv.appendChild(qBtn2);
    formDiv.appendChild(qBtn3);
    formDiv.appendChild(qBtn4);
    startButton.setAttribute("hidden", 'true')
    event.preventDefault();
    console.log(event.target.firstChild.data)
    console.log("score", score)
    console.log(i)
    // Prevent default action
    if (event.target.firstChild.data == answerArray[i]) {
        score = score + 10;
    } else {
        timeLeft = timeLeft - 5
    }

    console.log("Question\n", questionArray[i].question);
    console.log("Answer\n", answerArray[i])
    console.log("New score", score)

    qstn.textContent = questionArray[i].question;
    message.textContent = "";
    qBtn1.textContent = questionArray[i].answers[1];
    qBtn2.textContent = questionArray[i].answers[2];
    qBtn3.textContent = questionArray[i].answers[3];
    qBtn4.textContent = questionArray[i].answers[4];

    i++;
    console.log("New I", i)

    if (i > 10) {
        clearInterval(timeInterval)
        timer.textContent = "Finished with " + timeLeft + " seconds remaining!"
        qstn.textContent = "Well Done!";
        message.textContent = "your final score is\n" + score + " out of 100"
        formDiv.removeChild(qBtn1);
        formDiv.removeChild(qBtn2);
        formDiv.removeChild(qBtn3);
        formDiv.removeChild(qBtn4);
        formDiv.appendChild(input);
        submitButton.hidden = false
        input.hidden = false

    }
}
;

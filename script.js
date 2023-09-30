// Functions for query selecting and creating buttons
function select(id) {
    return document.querySelector(id);
}

function selectAll(id) {
    return document.querySelectorAll(id);
}

function createButton(id) {
    var button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("class", "btn");
    return button;
}
// Set variables
var question = select("#intro");
var message = select("#message");
var startButton = select("#start");
var submitButton = select("#submit");
var input = select('#inputBar');
var buttonGrid = selectAll('.btn');
var scoreBoard = select("#scores")
var formDiv = select("form");
var qBtn1 = createButton("b1");
var qBtn2 = createButton("b2");
var qBtn3 = createButton("b3");
var qBtn4 = createButton("b4");
var player = document.createElement("li")
var i;
var score = 0;
var playerScore = localStorage.getItem("playerScore");
var timer = select("#timer");
var timeLeft = 60;
var timeInterval
// Set question and answer choices 
var questionArray = [
    {
        question: "What programming language is commonly used for adding interactivity to web pages? ",
        answers: {
            1: "JavaScript",
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

];

var answerArray = ["JavaScript", "Cascading Style Sheets", "<ul>", "link", "color", "alerts", "parenthesis", "all of the above", "quotes", "console.log"];

function countdown() {



    // Use the setInterval() method to call a function to be executed every 1000 milliseconds, or 1 second
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // Set the text of of the timer to show the remaining seconds
            timer.textContent = timeLeft + ' seconds remaining';
            // Decrease timer by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When timer is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once timer gets to 0, set show end messages, show submit button, and remove answer buttons
            timer.textContent = '0 seconds remaining\nThe time ran out!';
            question.textContent = "All done!";
            message.textContent = "your final score is\n" + score + " out of 100";
            formDiv.removeChild(qBtn1);
            formDiv.removeChild(qBtn2);
            formDiv.removeChild(qBtn3);
            formDiv.removeChild(qBtn4);
            formDiv.appendChild(input);
            submitButton.hidden = false
            input.hidden = false
            // Use `clearInterval()` to stop the timer to show seconds remaining
            clearInterval(timeInterval);
            // Call the `displayMessage()` function

        }
    }, 1000);
}

function highScores(event) {
    console.log(input)
    console.log("score event", event)
    // scoreBoard.setAttribute("hidden", "false");
    scoreBoard.appendChild(player)
    player.textContent = input.value + "  with  a  " + score + " and still had " + timeLeft + " seconds remaining";
};

// set starting values for text elements
timer.textContent = timeLeft + " seconds for the test"
question.textContent = "Coding Quiz Challenge";
message.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your time by 5 seconds";
// Add listening event and starting function to the start button
startButton.addEventListener('click', function (event) {
    event.preventDefault();
    countdown();
    formDiv.appendChild(qBtn1);
    formDiv.appendChild(qBtn2);
    formDiv.appendChild(qBtn3);
    formDiv.appendChild(qBtn4);
    startButton.setAttribute("hidden", 'true')
    message.textContent = "";
    i = 0;
    question.textContent = questionArray[i].question;
    qBtn1.textContent = questionArray[i].answers[1];
    qBtn2.textContent = questionArray[i].answers[2];
    qBtn3.textContent = questionArray[i].answers[3];
    qBtn4.textContent = questionArray[i].answers[4];
});
// Add listening events to the buttons
submitButton.addEventListener("click", highScores);
qBtn1.addEventListener("click", questionTime);
qBtn2.addEventListener("click", questionTime);
qBtn3.addEventListener("click", questionTime);
qBtn4.addEventListener("click", questionTime);


function questionTime(event) {
    event.preventDefault();
    if (event.target.firstChild.data == answerArray[i]) {
        score = score + 10;
        localStorage.setItem("playerScore", score)
        console.log("Score", score)
        i++;
    } else {
        timeLeft = timeLeft - 5
    }
    if (i == 10) {
        clearInterval(timeInterval)
        timer.textContent = "Finished with " + timeLeft + " seconds remaining!"
        question.textContent = "Well Done!";
        message.textContent = "your final score is\n" + score + " out of 100"
        formDiv.removeChild(qBtn1);
        formDiv.removeChild(qBtn2);
        formDiv.removeChild(qBtn3);
        formDiv.removeChild(qBtn4);
        formDiv.appendChild(input);
        submitButton.hidden = false
        input.hidden = false

    } else {
        question.textContent = questionArray[i].question;
        qBtn1.textContent = questionArray[i].answers[1];
        qBtn2.textContent = questionArray[i].answers[2];
        qBtn3.textContent = questionArray[i].answers[3];
        qBtn4.textContent = questionArray[i].answers[4];
    };
};


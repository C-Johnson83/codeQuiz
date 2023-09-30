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
var restartButton = select("#restart");
var clearButton = select("#clear");
var homeButton = select("#home");
var show = select("#showScores");
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
var timeLeft = 90;
var timeInterval
var highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("scores");
// Set question and answer choices 
var questionArray = [
    {
        question: "Which symbol is used to denote an ID selector in CSS?",
        answers: {
            1: "#",
            2: ".",
            3: "@",
            4: "&",

        }
    },
    {
        question: 'What does the CSS property "margin" control?',
        answers: {
            1: "font size",
            2: "text color",
            3: "spacing around an element",
            4: "background color",

        }
    },
    {
        question: 'In JavaScript, what is the purpose of the "for" loop?',
        answers: {
            1: "Conditional statement",
            2: "Function declaration",
            3: "Repeating a block of code",
            4: "Switch statement",

        }
    },
    {
        question: "What does HTML stand for? ",
        answers: {
            1: "Hyper Text Markup Language",
            2: "Highly Textual Markup Language",
            3: "Hyper Transfer Markup Language",
            4: "Hypertext Transfer Markup Language",

        }
    },
    {
        question: "What does the CSS property 'box-sizing' control?",
        answers: {
            1: "Text alignment",
            2: "Element visibility",
            3: "How an element's total width and height is calculated",
            4: "Font size and color",

        }
    },
    {
        question: "What is the main role of HTML's <form> element? ",
        answers: {
            1: "Display images",
            2: "Define a paragraph",
            3: "Create a container for user input",
            4: "Change font style",

        }
    },
    {
        question: 'What is the purpose of the CSS property "display" set to "none"?',
        answers: {
            1: "Hide an element",
            2: "Change text color",
            3: "Create a border",
            4: "Enlarge the font size",

        }
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        answers: {
            1: "concat()",
            2: "pop()",
            3: "push()",
            4: "splice()",

        }
    },
    {
        question: "What does the HTML <img> tag define?",
        answers: {
            1: "Text paragraph",
            2: "Image element",
            3: "Hyperlink",
            4: "List item",

        }
    },
    {
        question: "Which data structure in JavaScript is ordered and can contain duplicate values?",
        answers: {
            1: "Array",
            2: "Object",
            3: "Set",
            4: "Map",

        }
    },
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

var answerArray = ["#","spacing around an element","Repeating a block of code","Hyper Text Markup Language","How an element's total width and height is calculated","Create a container for user input","Hide an element","push()","Image element","Array","JavaScript", "Cascading Style Sheets", "<ul>", "link", "color", "alerts", "parenthesis", "all of the above", "quotes", "console.log"];

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

function highScores() {
    submitButton.hidden = true;
    restartButton.hidden = false;
    clearButton.hidden = false;
    homeButton.hidden = false;
    highScoresList.hidden = false
    input.hidden = true;
    // Create a new object to store the player's name, score, and time remaining
    var playerData = {
        name: input.value,
        finalScore: score,
        timeRemaining: timeLeft
    };
    // Push the player's data into the high scores array
    highScoresArray.push(playerData);

    // Store the updated high scores array in local storage
    localStorage.setItem("highScores", JSON.stringify(highScoresArray));
    // Display high scores or update your displayHighScores function to show the latest scores
    displayHighScores()
}
function displayHighScores() {
    // set the content header for the score list
    highScoresList.innerHTML = 'HIGH SCORES:\n';

    // Loop through the high scores in the local storage and add them to the <ol>
    for (var i = 0; i < highScoresArray.length; i++) {
        var playerData = highScoresArray[i];
        console.log(playerData);
        var listItem = document.createElement("li");
        listItem.textContent = playerData.name + " - Score: " + playerData.finalScore + ", Time Remaining: " + playerData.timeRemaining + " seconds";
        highScoresList.appendChild(listItem);
    }


    // Call the displayHighScores function when you want to display high scores
}
displayHighScores();


// set starting values for text elements
timer.textContent = timeLeft + " seconds for the test"
question.textContent = "Coding Quiz Challenge";
message.textContent = "Try to answer the 20 following code related questions within the time limit. Incorrect answers will penalize your time by 3 seconds";

function start(event) {
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
}



// Add listening event and starting function to the start button
startButton.addEventListener('click', function (event) {
    event.preventDefault();
    highScoresList.hidden = true;
    start(event);
});
// Add listening events and functions to the buttons
submitButton.addEventListener("click", highScores);
show.addEventListener("click", function (event) {
    event.preventDefault();
    highScoresList.hidden = false;
});
show.addEventListener("dblclick", function (event) {
    event.preventDefault();
    highScoresList.hidden = true;
});

homeButton.addEventListener("click", function (event) {
    event.preventDefault();
    submitButton.hidden = true;
    restartButton.hidden = true;
    clearButton.hidden = true;
    highScoresList.hidden = true;
    startButton.hidden = false;
    homeButton.hidden = true;
    score = 0; // Reset the score
    timeLeft = 90; // Reset the timer
    clearInterval(timeInterval); // Clear any existing interval
    timer.textContent = timeLeft + " seconds for the test"
    question.textContent = "Coding Quiz Challenge";
    message.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your time by 3 seconds";
});

restartButton.addEventListener("click", function (event) {
    event.preventDefault();
    submitButton.hidden = true;
    restartButton.hidden = true;
    clearButton.hidden = true;
    highScoresList.hidden = true;
    score = 0; // Reset the score
    timeLeft = 90; // Reset the timer
    clearInterval(timeInterval); // Clear any existing interval
    timer.textContent = timeLeft + " seconds for the test";
    start(event); // Start the quiz again
});

clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("highScores"); // Remove the high scores data from local storage
    highScoresList.innerHTML = 'HIGH SCORES:\n'; // Clear the displayed high scores?
});

qBtn1.addEventListener("click", questionTime);
qBtn2.addEventListener("click", questionTime);
qBtn3.addEventListener("click", questionTime);
qBtn4.addEventListener("click", questionTime);

function questionTime(event) {
    event.preventDefault();
    if (event.target.firstChild.data == answerArray[i]) {
        score = score + 5;
        localStorage.setItem("playerScore", score)
        console.log("Score", score)
        console.log(playerScore)
        i++;
    } else {
        timeLeft = timeLeft - 3
        i++;
    }
    if (i == 20) {
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


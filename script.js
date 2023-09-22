// Set query variables
var qstn = document.querySelector("#intro");
var message = document.querySelector("#message");
var subButton = document.querySelector("#start");
var qBtn1 = document.querySelector("#b1");
var qBtn2 = document.querySelector("#b2");
var qBtn3 = document.querySelector("#b3");
var qBtn4 = document.querySelector("#b4");
// Set question array
var Qarray = [
    "Commonly used data types DO Not Include:",
    "The condition in an if / else statement is enclosed with _____",
    "Arrays in JavaScript can be used to store _____",
    "String values must be enclosed within _____ when being assigned to variables.",
    " A very useful tool used during development and debugging for printing content to the debugger is :",
];
// Set answer arrays
var q1Ops = ["1. strings","2. booleans","3. alerts","4. numbers"];
var q2Ops = ["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"];
var q3Ops = ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"];
var q4Ops = ["1. commas","2. curly brackets","3. quotes","4. parenthesis"];
var q5Ops = ["1. JavaScript","2. terminal/bash","3. for loops","4. console.log"];
var btnwds = [q1Ops,q2Ops,q3Ops,q4Ops,q5Ops]
var i = 0;
// set starting values for text elements
qstn.textContent = "Coding Quiz Challenge";
message.textContent = "Try to answer the following code related questions within the time limit.\n\nKeep in mind that incorrect answers will penalize your score/time by 10 seconds";
qBtn1.textContent = "";
qBtn2.textContent = "";
qBtn3.textContent = "";
qBtn4.textContent = "";
subButton.addEventListener("click", question);

function question(event) {

    // Prevent default action
    event.preventDefault();
    console.log(event);
    subButton.setAttribute("hidden", '')
    qstn.textContent = Qarray[i];
    message.textContent = "";
    qBtn1.textContent = btnwds[i][0];
    qBtn2.textContent = btnwds[i][1];
    qBtn3.textContent = btnwds[i][2];
    qBtn4.textContent = btnwds[i][3];
    i++;
};
// Ending message "All done!"   
// your final score is XX.  
// Enter initials input-box  submit button
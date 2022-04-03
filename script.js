// Start Page: quiz name, description, start button
// Question: quiz question, list of possible answers
// End Page: header text, score, input area for initials, submit button
// Answer Text: shows "correct" or "incorrect"
// High Score Page: header text, list of scores, button to return to Start Page, button to clear high scores
var startButton = document.querySelector("#start-button");
var heading = document.querySelector("#box-header");
var boxText = document.querySelector("#box-text");
var list = document.querySelector("#list");
var timer = document.querySelector("#cd");

var optCorrect = document.createElement("li");
var opt1 = document.createElement("li");
var opt2 = document.createElement("li");
var opt3 = document.createElement("li");

var state = startButton.getAttribute("data-state");

// When user opens application
    // Start Page is presented

// When start button is clicked
    // Timer begins
    // Start Page is removed
    // Question #1 page is presented


function beginQuiz(event) {
    event.preventDefault();
    console.log("Start Button Clicked");

    countdown();

    heading.textContent = "Question 1";
    boxText.textContent = "First Quiz Question";

    optCorrect.textContent = "Correct Answer";
    list.appendChild(optCorrect);
    opt1.textContent = "Option 1";
    list.appendChild(opt1);
    opt2.textContent = "Option 2";
    list.appendChild(opt2);
    opt3.textContent = "Option 3";
    list.appendChild(opt3);

    if (state === "visible") {
        startButton.setAttribute("data-state", "hidden");
        startButton.setAttribute("style", "background-color: white; color: white; border: white; cursor: auto;")
    }

}

function countdown() {
    var quizTime = 60;

    var timeInt = setInterval(function () {
        if (quizTime > 1) {
            timer.textContent = quizTime + " seconds remaining";
            quizTime--;
        } else if (quizTime === 1) {
            timer.textContent = quizTime + " second remaining";
            quizTime--;
        } else {
            timer.textContent = "You're out of time!";
            clearInterval(timeInt);
        }
    }, 1000);
}


startButton.addEventListener("click", beginQuiz);
// When an answer is clicked
    // Question #1 is removed
    // Question #2 is presented
    // Answer Text is presented, with "correct" or "incorrect"
        // If incorrect, time is removed from the timer
    
// When all questions are answered OR when time runs out
    // Question is removed
    // Answer Text is removed
    // End Page is presented
    // Score is presented (score = time left)
    // User enters initials and clicks submit
        // User initials & score are saved locally

// When submit is clicked
    // End Page is removed
    // High Score Page is presented
    // Scores are pulled from local file & shown in a list

// When 'Clear High Scores' button is clicked
    // Previous scores are removed from list

// When 'Go Back' button is clicked
    // High Score page is removed
    // Start Page is presented


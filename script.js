// Start Page: quiz name, description, start button
// Question: quiz question, list of possible answers
// End Page: header text, score, input area for initials, submit button
// Answer Text: shows "correct" or "incorrect"
// High Score Page: header text, list of scores, button to return to Start Page, button to clear high scores

// Selectors 
var mainBox = document.querySelector("#main-box");
var boxContent = document.querySelector("#content");
var startButton = document.querySelector("#start-button");
var heading = document.querySelector("#box-header");
var boxText = document.querySelector("#box-text");
var list = document.querySelector("#list");
var timer = document.querySelector("#cd");
var result = document.querySelector("#result");
var initialFormEl = document.querySelector("#initial-form");

// Possible Answers
var optCorrect = document.createElement("li");
var opt1 = document.createElement("li");
var opt2 = document.createElement("li");
var opt3 = document.createElement("li");

// Initial form
var initLabel = document.createElement("label");
initLabel.setAttribute("for", "initials");
var initInput = document.createElement("input");
initInput.setAttribute("type", "text");
initInput.setAttribute("id", "initials");
initInput.setAttribute("name", "initials");
var initButton = document.createElement("button");
initButton.setAttribute("id", "init-button");


var quizContent = [
    {
        question: "question 1",
        ansCorrect: "correct answer",
        ans1: "option 1",
        ans2: "option 2",
        ans3: "option 3",
    },
    {
        question: "question 2",
        ansCorrect: "correct answer",
        ans1: "option 1",
        ans2: "option 2",
        ans3: "option 3",
    },
    {
        question: "question 3",
        ansCorrect: "correct answer",
        ans1: "option 1",
        ans2: "option 2",
        ans3: "option 3",
    },
    {
        question: "question 4",
        ansCorrect: "correct answer",
        ans1: "option 1",
        ans2: "option 2",
        ans3: "option 3",
    },
    {
        question: "question 5",
        ansCorrect: "correct answer",
        ans1: "option 1",
        ans2: "option 2",
        ans3: "option 3",
    },
]

// Quiz Time
var quizTime = 60;

// Function for start button
function beginQuiz(event) {
    event.preventDefault();
    console.log("Start Button Clicked");

    // Start button & heading disappear
    startButton.setAttribute("style", "display: none;");
    heading.setAttribute("style", "display: none;");

    // Countdown begins
    countdown();

    // Quiz questions begin
    q1();
} 

function q1() {
    list.appendChild(optCorrect);
    list.appendChild(opt1);
    list.appendChild(opt2);
    list.appendChild(opt3)
    
    var i = 0
    boxText.textContent = quizContent[i].question;
    optCorrect.textContent = quizContent[i].ansCorrect;
    opt1.textContent = quizContent[i].ans1;
    opt2.textContent = quizContent[i].ans2;
    opt3.textContent = quizContent[i].ans3;
    
    list.addEventListener("click", function answer(event) {
        event.preventDefault();
        q2();
        result.setAttribute("style", "border-top: 2px solid var(--accentText);");
        if (event.target === optCorrect) {
            result.textContent = "Correct!"
        } else {
            result.textContent = "Incorrect"
        }    
    })
}

function q2() {
    var i = 1
    boxText.textContent = quizContent[i].question;
    optCorrect.textContent = quizContent[i].ansCorrect;
    opt1.textContent = quizContent[i].ans1;
    opt2.textContent = quizContent[i].ans2;
    opt3.textContent = quizContent[i].ans3;
    
    list.addEventListener("click", function answer(event) {
        event.preventDefault();
        q3();
        result.setAttribute("style", "border-top: 2px solid var(--accentText);");
        if (event.target === optCorrect) {
            result.textContent = "Correct!"
        } else {
            result.textContent = "Incorrect"
        }    
    })
}

function q3() {
    var i = 2
    boxText.textContent = quizContent[i].question;
    optCorrect.textContent = quizContent[i].ansCorrect;
    opt1.textContent = quizContent[i].ans1;
    opt2.textContent = quizContent[i].ans2;
    opt3.textContent = quizContent[i].ans3;
    
    list.addEventListener("click", function answer(event) {
        event.preventDefault();
        q4();
        result.setAttribute("style", "border-top: 2px solid var(--accentText);");
        if (event.target === optCorrect) {
            result.textContent = "Correct!"
        } else {
            result.textContent = "Incorrect"
        }    
    })
}

function q4() {
    var i = 3
    boxText.textContent = quizContent[i].question;
    optCorrect.textContent = quizContent[i].ansCorrect;
    opt1.textContent = quizContent[i].ans1;
    opt2.textContent = quizContent[i].ans2;
    opt3.textContent = quizContent[i].ans3;
    
    list.addEventListener("click", function answer(event) {
        event.preventDefault();
        q5();
        result.setAttribute("style", "border-top: 2px solid var(--accentText);");
        if (event.target === optCorrect) {
            result.textContent = "Correct!"
        } else {
            result.textContent = "Incorrect"
        }    
    })
}

function q5() {
    var i = 4
    boxText.textContent = quizContent[i].question;
    optCorrect.textContent = quizContent[i].ansCorrect;
    opt1.textContent = quizContent[i].ans1;
    opt2.textContent = quizContent[i].ans2;
    opt3.textContent = quizContent[i].ans3;
    
    list.addEventListener("click", function answer(event) {
        event.preventDefault();
        endQuiz();
        result.setAttribute("style", "border-top: 2px solid var(--accentText);");
        if (event.target === optCorrect) {
            result.textContent = "Correct!"
        } else {
            result.textContent = "Incorrect"
        }    
    })
}

// Function for timer
function countdown() {

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

function endQuiz() {
    heading.removeAttribute("style", "display: none;");
    heading.textContent = "Quiz Complete";

    list.setAttribute("style", "display: none;")
    mainBox.removeChild(result);

    boxText.textContent = "Your final score is ";

    initialFormEl.setAttribute("style", "margin-top: 30px;");
    initialFormEl.appendChild(initLabel);
    initLabel.textContent = "Enter your initials: ";
    initialFormEl.appendChild(initInput);
    initialFormEl.appendChild(initButton);
    initButton.textContent = "Submit";

}

startButton.addEventListener("click", beginQuiz);


// When user opens application
    // Start Page is presented

// When start button is clicked
    // Timer begins
    // Start Page is removed
    // Question #1 page is presented

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


// Start Page: quiz name, description, start button
// Question: quiz question, list of possible answers
// End Page: header text, score, input area for initials, submit button
// Answer Text: shows "correct" or "incorrect"
// High Score Page: header text, list of scores, button to return to Start Page, button to clear high scores

// Selectors 
var startButton = document.querySelector("#start-button");
var mainBox = document.querySelector("#main-box");
var boxContent = document.querySelector("#content");
var heading = document.querySelector("#box-header");
var boxText = document.querySelector("#box-text");
var list = document.querySelector("#list");
var timer = document.querySelector("#cd");
var vhsButton = document.querySelector("vhs");
var result = document.querySelector("#result");
var initialFormEl = document.querySelector("#initial-form");
var scoreViewEl = document.querySelector("#score-view");

// Quiz Answer Elements
var optCorrect = document.createElement("li");
var opt1 = document.createElement("li");
var opt2 = document.createElement("li");
var opt3 = document.createElement("li");

// Initial form Elements
var initLabel = document.createElement("label");
initLabel.setAttribute("for", "initials");
var initInput = document.createElement("input");
initInput.setAttribute("type", "text");
initInput.setAttribute("id", "initials");
initInput.setAttribute("name", "initials");
var initButton = document.createElement("button");
initButton.setAttribute("id", "init-button");

// High Scores Page Elements
var backButton = document.createElement("button");
backButton.setAttribute("id", "back-button");
var clearButton = document.createElement("button");
clearButton.setAttribute("id", "clear-button");

// Quiz Questions
var quizContent = [
    {
        question: "Each season of America's Next Top Model is known as a _________.",
        ansCorrect: "cycle",
        ans1: "season",
        ans2: "round",
        ans3: "session",
    },
    {
        question: "Which celebrity has NOT been a judge on America's Next Top Model?",
        ansCorrect: "Gisele Bündchen",
        ans1: "Nigel Barker",
        ans2: "Janice Dickinson",
        ans3: "André Leon Talley",
    },
    {
        question: "The premiere of America's Next Top Model was released in _________.",
        ansCorrect: "2003",
        ans1: "2007",
        ans2: "2001",
        ans3: "2005",
    },
    {
        question: "Mister J is the creative director, but Miss J is the _________.",
        ansCorrect: "runway diva coach extraordinaire",
        ans1: "noted fashion photographer",
        ans2: "Czech model, actress, and author",
        ans3: "former editor-at-large for Elle",
    },
    {
        question: "On cycle 5, which contestant stole Bre's cereal bar?",
        ansCorrect: "Lisa",
        ans1: "Ebony",
        ans2: "Ashley",
        ans3: "Nicole",
    },
]
var quizData = [];

// Quiz Time
var quizTime = 59;
var timeInt;
var endTime;

// Function for start button
function beginQuiz(event) {
    event.preventDefault();
    console.log("start button");
    // Start button & heading disappear
    startButton.setAttribute("style", "display: none;");
    heading.setAttribute("style", "display: none;");

    // Countdown begins
    countdown();

    // Quiz questions begin
    q1();
} 

function q1() {
    
    list.appendChild(opt1);
    list.appendChild(opt2);
    list.appendChild(opt3);
    list.appendChild(optCorrect);
    
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
            result.textContent = "correct!"
        } else {
            result.textContent = "incorrect"
            quizTime = quizTime-10;
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
            result.textContent = "correct!"
        } else {
            result.textContent = "incorrect"
            quizTime = quizTime-10;
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
            result.textContent = "correct!"
        } else {
            result.textContent = "incorrect"
            quizTime = quizTime-10;
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
            result.textContent = "correct!"
        } else {
            result.textContent = "incorrect"
            quizTime = quizTime-10;
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
            result.textContent = "correct!"
        } else {
            result.textContent = "incorrect"
            quizTime = quizTime-10;
        }  
    })
}

// Timer function
function countdown() {
    // Time interval & attached text
    timeInt = setInterval(function () {
        if (quizTime > 1) {
            timer.textContent = quizTime + " seconds remaining";
            quizTime--;
        } else if (quizTime === 1) {
            timer.textContent = quizTime + " second remaining";
            quizTime--;
        } else {
            timer.textContent = "You're out of time!";
            clearInterval(timeInt);
            // Run end quiz function if time runs out before last question is finished
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {
    // Show heading
    heading.removeAttribute("style", "display: none;");
    heading.textContent = "Quiz Complete";
    // Remove answer list & display end time
    list.setAttribute("style", "display: none;")
    mainBox.removeChild(result);

    if (quizTime <= 0) {
        boxText.textContent = "Your final score is 0";
        endTime = 0;
    } else {
        endTime = quizTime + 1;
        boxText.textContent = "Your final score is " + endTime;
    }

    // Show form for user initials
    initialFormEl.setAttribute("style", "margin-top: 30px;");
    initialFormEl.appendChild(initLabel);
    initLabel.textContent = "Enter your initials: ";
    initialFormEl.appendChild(initInput);
    initialFormEl.appendChild(initButton);
    initButton.textContent = "Submit";
    // Stop timer if last question is completed before time runs out
    clearInterval(timeInt);
    // Listen for click event on the submit button
    initButton.addEventListener("click", submit);
}

function submit() {

    var userScore = {
        user: initInput.value,
        score: endTime
    }

    localStorage.setItem("data", JSON.stringify(quizData.concat(userScore)));
    // Change heading text
    heading.textContent = "High Scores";
    // Remove form for initials & other text within box
    initialFormEl.setAttribute("style", "display: none;");
    boxContent.removeChild(boxText);

    // Show back button & clear button
    scoreViewEl.appendChild(backButton);
    backButton.textContent = "Go Back";
    scoreViewEl.appendChild(clearButton);
    clearButton.textContent = "Clear High Scores";

    

}

// function renderScores() {
//     var 
// }

function goBack() {
    location.reload();
}

function clearHighScores() {
    localStorage.clear();
}


startButton.addEventListener("click", beginQuiz);
backButton.addEventListener("click", goBack);
clearButton.addEventListener("click", clearHighScores);
// vhsButton.addEventListener("click", ______)



// Save Array in Local Storage
// localStorage.setItem("scores", JSON.stringify(userScore));

// localStorage.setItem("user", userInit);
// localStorage.setItem("score", quizTime);

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


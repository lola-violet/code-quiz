// Start Page: quiz name, description, start button
// Question: quiz question, list of possible answers
// End Page: header text, score, input area for initials, submit button
// Answer Text: shows "correct" or "incorrect"
// High Score Page: header text, list of scores, button to return to Start Page, button to clear high scores

// When user opens application
    // Start Page is presented

// When start button is clicked
    // Start Page is removed
    // Question #1 page is presented
    // Timer begins

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


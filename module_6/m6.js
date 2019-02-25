// var firstName = prompt("First Name?");
// var lastName = prompt("Last Name?");

// document.write("First Name: " + firstName + "<br>Last Name: " + lastName);

var bool = confirm("Start a number guessing game?");

if(bool)
    startGame();
else 
    document.write("<p>Game aborted.</p>");

/*
 * Number guessing game logic.
 */
function startGame() {
    var num = Math.floor((Math.random() * 100) + 1);
    var msg = "Guess a number between 1-100.";
    var guess = prompt(msg);

    // Tracks # of guesses
    var attempts = 1;

    while(guess != num) {
        // Check value
        // Only checks for greater/less than as the initial while condition checks equals.
        if(guess > num)
            alert("Too high.");
        else
            alert("Too low.");

        // Gets new input and increments # of attempts
        guess = prompt(msg);
        attempts++;
    }
    document.write("<h2>Correct!</h2><h3>" + getFeedback(attempts) + "</h3><p>Answer = " + num +
                    "<br># of attempts: " + attempts + "</p>");
}

/*
 * Returns a customized feedback message based on the number of attempts passed in. 
 */
function getFeedback(tries) {
    if(tries <= 7) return "Amazing job!"
    else if(tries >= 25) return "Nice job. You could do better though."
    else return "Great job! Good score, but you could get that even lower."
}
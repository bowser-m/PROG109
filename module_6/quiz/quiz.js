var bool = confirm("Would you like to take a LoTR Character Quiz?");

if(bool) quiz();
else document.write("<h3>Quiz aborted.</h3>");

function quiz() {
    var ans0 = "frodo";
    var ans1 = "sam";
    var ans2 = "sauron";
    var ans3 = "gollum";
    var ans4 = "gandalf";

    var correct = "Correct answer!";
    var incorrect = "Incorrect answer.";

    var score = 0;

    var input = prompt("Who was the ringbearer?");
    if(checkAnswer(input, ans0)) {
        score++;
        alert(correct);
    } else alert(incorrect);
    input = prompt("Who stayed by the ringbearer's side?");
    if(checkAnswer(input, ans1)) {
        score++;
        alert(correct);
    } else alert(incorrect);
    input = prompt("Who was trying to reclaim the ring and had power over Mordor?");
    if(checkAnswer(input, ans2)) {
        score++;
        alert(correct);
    } else alert(incorrect);
    input = prompt("Who was trying to steal the ring from the ringbearer?");
    if(checkAnswer(input, ans3)) {
        score++;
        alert(correct);
    } else alert(incorrect);
    input = prompt("Who was the wizard that travelled with the Fellowship?");
    if(checkAnswer(input, ans4)) {
        score++;
        alert(correct);
    } else alert(incorrect);

    document.write("<h3>Score: " + score + "</h3>");
}

function checkAnswer(input, ans) {
    if(input.toLowerCase() == ans) return true;
    else return false;
}
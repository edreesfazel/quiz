var choices = document.querySelectorAll("#choices .choice");
var resultElement = document.getElementById("result");

// add a click event listener to each answer choice
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", checkAnswer);
}

function checkAnswer() {
    var correctAnswer = "Rudy Gay";
    var userAnswer = this.textContent;

    // add the "selected" class to the clicked answer choice
    this.classList.add("selected");

    // check if the answer is correct
    if (correctAnswer === userAnswer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect";
        resultElement.style.color = "red"
    }
}

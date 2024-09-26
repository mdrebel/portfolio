// Function to create bubbles
function makeBubble() {
    var cluster = "";
    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = cluster;
}

// Variables for timer, score, and hit number
var timer = 60;
var score = 0;
var hitrn = 0;
var timerint;

// Timer function
function runTimer() {
    timer = 60;  // Reset timer to 5
    document.querySelector("#timerval").textContent = timer;

    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
            document.querySelector("#restartWrapper").style.display = "block"; // Show restart button when game ends
        }
    }, 1000);
}

// Generate new hit number
function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Increase score
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// Event listener for clicking bubbles
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum == hitrn) {
        increaseScore();
        makeBubble();
        getNewhit();
    }
});

// Restart the game
document.querySelector("#restartBtn").addEventListener("click", function () {
    // Reset variables
    score = 0;
    
    document.querySelector("#scoreval").textContent = score;

    // Hide the restart button
    document.querySelector("#restartWrapper").style.display = "none";

    // Start the game again
    makeBubble();
    getNewhit();
    runTimer();
});

// Start the game on page load
getNewhit();
runTimer();
makeBubble();

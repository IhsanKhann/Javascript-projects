let ParentContainer = document.querySelector(".images");

let ScoreText = document.querySelector("h2");
let ComputerScore = 0;
let UserScore = 0;

let CompText = document.querySelector("#computerScore");
let UserText = document.querySelector("#yourScore");

let PlayBtn = document.querySelector(".play-btn");

let UserChoice = null;
let ComputerChoice = null;
let Result = null;

// When user clicks a choice (rock/paper/scissors), just store it
ParentContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        let div = event.target.closest("div");
        let button = div.querySelector("button");

        if (button && button.value) {
            UserChoice = button.value;

            // Random computer choice
            let choices = ["rock", "paper", "scissors"];
            let randomIndex = Math.floor(Math.random() * choices.length);
            ComputerChoice = choices[randomIndex];

            // No result calculated yet — will happen on Play button
            Result = checkWin(UserChoice, ComputerChoice);
        }
    }
});

// When user clicks Play button, then show result and update score
PlayBtn.addEventListener("click", function () {
    if (UserChoice !== null && ComputerChoice !== null && Result !== null) {
        updateScores(Result);

        CompText.innerText = ComputerScore;
        UserText.innerText = UserScore;

        if (Result === true) {
            PlayBtn.innerText = "You Won. Computer chose: " + ComputerChoice;
        } else if (Result === false) {
            PlayBtn.innerText = "You Lost. Computer chose: " + ComputerChoice;
        } else if (Result === "-1") {
            PlayBtn.innerText = "Draw. Computer chose: " + ComputerChoice ;
        }
    } else {
        PlayBtn.innerText = "Make a move first!";
    }
    //    PlayBtn.innerText = "Check Score" 

    setTimeout(()=>{
        Resetbtn() ;
    }, 2000)

})

const Resetbtn = () => {
    PlayBtn.innerText = "Check Score";
};

// Your original result checker
function checkWin(UserChoice, ComputerChoice) {
    if (UserChoice === ComputerChoice) {
        // ScoreText.innerText = "Draw";
        return "-1";
    }

    if (UserChoice === "rock") {
        if (ComputerChoice === "paper") {
            // ScoreText.innerText = "Computer win";
            return false;
        } else if (ComputerChoice === "scissors") {
            // ScoreText.innerText = "You win";
            return true;
        }
    }

    if (UserChoice === "paper") {
        if (ComputerChoice === "rock") {
            // ScoreText.innerText = "You win";
            return true;
        } else if (ComputerChoice === "scissors") {
            // ScoreText.innerText = "Computer win";
            return false;
        }
    }

    if (UserChoice === "scissors") {
        if (ComputerChoice === "rock") {
            // ScoreText.innerText = "Computer win";
            return false;
        } else if (ComputerChoice === "paper") {
            // ScoreText.innerText = "You win";
            return true;
        }
    }
}

// Score update function (unchanged)
function updateScores(Result) {
    if (Result === true) {
        UserScore = UserScore + 1;
    } else if (Result === false) {
        ComputerScore = ComputerScore + 1;
    } else {
        // draw, do nothing
    }
}


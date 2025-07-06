// select all the boxes:
let Boxes = document.querySelectorAll(".box");
let PlayButton = document.querySelector(".play-btn");
let ResetButton = document.querySelector(".Reset-Btn");
let WinnerText = document.querySelector(".AfterWin h2");
let body = document.querySelector("body");
let main = document.querySelector(".main-container");
let mainNew = document.querySelector(".AfterWin");

let TurnX = true;
let CountTurns = 0;

gameConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

PlayButton.addEventListener("click", () => {
    Reset();
});

ResetButton.addEventListener("click", () => {
    Reset();
});

function Reset() {
    location.reload();
}

for (let i = 0; i < Boxes.length; i++) {
    Boxes[i].addEventListener("click", () => {
        if (Boxes[i].innerText === "") {
            if (TurnX) {
                Boxes[i].innerText = "X";
                TurnX = false;
            } else {
                Boxes[i].innerText = "O";
                TurnX = true;
            }
            Boxes[i].disabled = true;
            CountTurns += 1;
            checkWinner();
            checkDraw();
        }
    })
}

function checkWinner() {
    for (let pattern of gameConditions) {
        const pos1 = pattern[0];
        const pos2 = pattern[1];
        const pos3 = pattern[2];

        const val1 = Boxes[pos1].innerText;
        const val2 = Boxes[pos2].innerText;
        const val3 = Boxes[pos3].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            WinnerText.innerText = `Winner: ${val1}`;
            AdjustContent();
            for (let i = 0; i < Boxes.length; i++) {
                Boxes[i].disabled = true;
            }
            break;
        }
    }
}

function checkDraw() {
    if (CountTurns === 9) {
        WinnerText.innerText = `It's a Draw!`;
        AdjustContent();
        for (let i = 0; i < Boxes.length; i++) {
            Boxes[i].disabled = true;
        }
    }
}

function AdjustContent() {
    main.style.display = "none";
    mainNew.style.display = "flex";
    mainNew.style.width = "100vw";
    mainNew.style.height = "100vh";
    mainNew.style.justifyContent = "center";
    mainNew.style.alignItems = "center";
    mainNew.style.flexDirection = "column";
}

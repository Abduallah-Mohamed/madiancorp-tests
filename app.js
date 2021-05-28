const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const valueOfUserScore = document.querySelector(".user-score");
const valueOfComputerScore = document.querySelector(".computer-score");
const choose = document.querySelector(".choose");
const message = document.querySelector(".message");

const items = [rock.textContent, paper.textContent, scissors.textContent];

// to store the computer result
let result = "";

let userScore = 0;
let computerScore = 0;

valueOfComputerScore.innerHTML = computerScore;
valueOfUserScore.innerHTML = userScore;

const choose_random_item = () => {
    result = items[Math.floor(Math.random() * items.length)];
};

rock.addEventListener("click", () => {
    choose_random_item();
    if (result === rock.textContent) {
        userScore = userScore;
        computerScore = computerScore;
    } else if (result === "Paper") {
        computerScore++;
    } else if (result === "Scissors") {
        userScore++;
    }

    valueOfComputerScore.innerHTML = computerScore;
    valueOfUserScore.innerHTML = userScore;
    choose.innerHTML = result;

    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            message.innerHTML = `you won!`;
        } else if (computerScore === 5) {
            message.innerHTML = `Game Over!`;
        }

        computerScore = 0;
        userScore = 0;
    }
});

paper.addEventListener("click", () => {
    choose_random_item();
    if (result === paper.textContent) {
        userScore = userScore;
        computerScore = computerScore;
    } else if (result === "Rock") {
        userScore++;
    } else if (result === "Scissors") {
        computerScore++;
    }

    valueOfComputerScore.innerHTML = computerScore;
    valueOfUserScore.innerHTML = userScore;
    choose.innerHTML = result;

    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            message.innerHTML = `you won!`;
        } else if (computerScore === 5) {
            message.innerHTML = `Game Over!`;
        }
        computerScore = 0;
        userScore = 0;
    }
});

scissors.addEventListener("click", () => {
    choose_random_item();

    if (result === scissors.textContent) {
        userScore = userScore;
        computerScore = computerScore;
    } else if (result === "Paper") {
        userScore++;
    } else if (result === "Rock") {
        computerScore++;
    }

    valueOfComputerScore.innerHTML = computerScore;
    valueOfUserScore.innerHTML = userScore;
    choose.innerHTML = result;

    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            message.innerHTML = `you won!`;
        } else if (computerScore === 5) {
            message.innerHTML = `Game Over!`;
        }
        computerScore = 0;
        userScore = 0;
    }
});

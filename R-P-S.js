let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#comp-score");


const generateComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rendomIndx = Math.floor(Math.random() * 3);
    return option[rendomIndx];
    //rock,paper,scissors
};

const drawGame = (userchoice) => {

    msg.innerText = "Game was Draw play again.";
    msg.style.backgroundColor = "#081b31";


}

const showWinner = (userWine, userchoice, computerChoice) => {
    if (userWine) {
        userScore++;
        userScorepara.innerText = userScore;

        msg.innerText = `You Wine! your ${userchoice} beat ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorepara.innerText = computerScore;

        msg.innerText = `You Lost! ${computerChoice} beat your ${userchoice}`;
        msg.style.backgroundColor = "red";


    }
}

const playgame = (userchoice) => {
   
    //generate comp choice
    const computerChoice = generateComputerChoice();


    if (userchoice === computerChoice) {
        //Draw game
        drawGame();
    }
    else {
        let userWine = true;
        if (userchoice === "rock") {
            userWine = computerChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWine = computerChoice === "scissors" ? false : true;
        }
        else {
            userWine = computerChoice === "rock" ? false : true;
        }
        showWinner(userWine, userchoice, computerChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
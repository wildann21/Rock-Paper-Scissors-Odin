

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
        return "rock"
    }else if (randomNumber === 1){
        return "paper"
    }else{
        return "scissor"
    }
}

function getHumanChoice(){
    let userInput = prompt("choose rock, paper or scissor: ").toLowerCase()
    return userInput
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    }

    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Skor -> Kamu: ${humanScore} | Komputer: ${computerScore}`);
    }
      console.log("=== Hasil Akhir ===");
      console.log(`Skor Akhir -> Kamu: ${humanScore} | Komputer: ${computerScore}`);
}

playGame()
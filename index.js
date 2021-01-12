const game = () => {

  let playerScore = 0;
  let computerScore = 0;

  const computerPlay = () => {
    let arr = ['rock', 'paper', 'scissors'];

    let index = Math.floor(Math.random() * 3);
    return arr[index];
  }

  const userChoice = () => {
      let playerChoice = prompt('Select rock, paper or scissors');
      if(playerChoice === null) window.location.reload() // resets the score
      return playerChoice.toLowerCase(); // trim() doesn't work
  }

  const playRound = () => {
    let display = document.getElementById('display');

    let playerSelection = userChoice();
    const computerSelection = computerPlay();

      if(playerSelection === 'rock' ||
         playerSelection === 'paper' ||
         playerSelection === 'scissors'){


      if(playerSelection === computerSelection){
         alert(`Player selected: ${playerSelection}. Computer selected: ${computerSelection}.\n
                Player Score: ${playerScore}.  Computer Score: ${computerScore}.`)
        return;
      }

      if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        playerScore += 1;
        alert(`Player selected: ${playerSelection}. Computer selected: ${computerSelection}.\n
               Player Score: ${playerScore}.  Computer Score: ${computerScore}.`)
        return;
      }
     if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
      ) {
        computerScore += 1;
         alert(`Player selected: ${playerSelection}. Computer selected: ${computerSelection}.\n
                               Player Score: ${playerScore}.  Computer Score: ${computerScore}.`)
        return;
      }
  } else {
    alert('Not a valid choice')
  }
}
  while(playerScore < 5 && computerScore < 5){
    playRound()
  }
  alert('Game over')
}

game()

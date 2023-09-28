let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  tie: 0
};

updateScore();
/*if(!score){
  wins: 0,
  losses: 0,
  tie: 0
};
*/

function pickComputerMove(){
  let computerMove = '';
  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 3/3){
    computerMove = 'Scissors';
  }
  return computerMove;
}

let isAutotPlaying = false;
let intervalId;

function autoPlay(){
  
  if(!isAutotPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutotPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutotPlaying = false;
  }
}

function playGame(playerMove){
  let result = '';
  let computerMove = pickComputerMove();
  if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
    result = 'Tie.';
    } else if(computerMove === 'Paper'){
      result = 'You lose.';
    } else if(computerMove === 'Scissors'){
      result = 'You win.';
    }

  } else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You win.';
    } else if(computerMove === 'Paper'){
      result = 'Tie.';
    } else if(computerMove === 'Scissors'){
      result = 'You lose.';
    }
      
  } else if(playerMove = 'Scissors'){
    if(computerMove === 'Rock'){
    result = 'You lose.';
    } else if(computerMove === 'Paper'){
      result = 'You win.';
    } else if(computerMove === 'Scissors'){
      result = 'Tie.';
    }
  } 
  
  if(result === 'You win.'){
    score.wins += 1;
  } else if(result === 'You lose.'){
    score.losses += 1;
  } else if(result === 'Tie.'){
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  document.querySelector('.js-resultElement')
    .innerHTML = result;
  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="images/${playerMove}-emoji.png" alt="Rock" class="emoji">
<img src="images/${computerMove}-emoji.png" alt="Scissors" class="emoji">
Computer`;
}

function updateScore(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

function resetScore(){
  score.wins = 0,
  score.losses = 0,
  score.tie = 0,
  updateScore();
}
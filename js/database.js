let turn = "x";
let winner = "no";
let winingPlayer = '';


  const winningCombinations = {
  1: ['0','1','2'],
  2: ['3','4','5'],
  3: ['6','7','8'],
  4: ['0','3','6'],
  5: ['1','4','7'],
  6: ['2','5','8'],
  7: ['0','4','8'],
  8: ['2','4','6']
  };

  const playerMoves = {
  playerA:[],
  playerB:[]
  };

  const scoreBoard = {
    playerAScore: 0,
    playerBScore: 0
  };

  const findWinner = {
    winnerA: '',
    winnerB: ''
  };

  let counter = 0;
  const checkWin = function (player) {
    for (let key in winningCombinations) {
      for (let i = 0; i < winningCombinations[key].length; i++) {
        if (player.includes(winningCombinations[key][i])){
          counter++;
          }
        }
      if (counter === 3){
        win();
        break;
      }
    }
  }

  const checkWinner = function() {
    if (findwinner.winnerA === true){
    winingPlayer =  winnerA;
    } else {
    winingPlayer = winnerB;
    }
  };

  const addScore = function() {
    if (turn === "x" && counter !== 3){
      scoreBoard.playerBScore++;
    }
    else (turn === "o" && counter !== 3)){
      scoreBoard.playerAScore++;
    }
  };

  const addNames = function () {

  alert ('Please enter a name for Player A and Player B annd press Submit')
  };

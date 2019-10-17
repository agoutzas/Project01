
const draw = function (){
  let result = $('.resultsTab');
  let print = result.children();
  print.text("draw");
}

const win = function() {
    if (turn === "x") {
      let result = $('.resultsTab');
      let print = result.children();
      print.text("Our winner is Player B");
      // flash on playerA
      //addScore.playerA++

    }else {
      let result = $('.resultsTab');
      let print = result.children();
      print.text("Our winner is Player A");
      //flash on PlayerB
      //addScore.playerA++
    };

  winner = "yes";
  makeSomeShitGoCrazy();
  addScore();
  displayScore();
  }


const makeSomeShitGoCrazy = function() {
  console.log('have fun with the css');
}

const displayScore = function (){
  console.log(scoreBoard.playerAScore);
  // push scoreBoard.playerBScore to $(".scoreB")
  console.log(scoreBoard.playerBScore);
  // push scoreBoard.playerBScore to $(".scoreB")
}
////////////////////////////

$(document).ready(function () {


  $('.tic').on('click', function () {

    if ($(this).text().length === 1) {
      return;
    }
    if (winner === "yes") {
      return;
    }

    if (turn === "x") {
      let result = $('.resultsTab');
      let print = result.children();
      print.text("It's Player B's Turn");
      //highlight playerA class
      }else {
      let result = $('.resultsTab');
      let print = result.children();
      print.text("It's Player A's Turn");
      //highlight playerA class

    }


    if (turn === "x") {
      $(this).text("x");
      playerMoves.playerA.push($(this).attr('id'));
      turn = "o";
      checkWin(playerMoves.playerA);
      if(playerMoves.playerA.length === 5){
      draw();
      }

    } else {
      $(this).text("o"); // can insert image if you wanted here
      playerMoves.playerB.push($(this).attr('id'));
      turn = "x";
      checkWin(playerMoves.playerB);
      if(playerMoves.playerB.length === 5){
      draw();
      };
    };

  });

  $('.resetBoard').on('click', function () {
      turn = "x";
      winner = "no";
      $('.tic').empty();
      playerMoves.playerA.length = 0;
      playerMoves.playerB.length = 0;
      scoreBoard.playerAScore = 0;
      scoreBoard.playerBScore = 0;
  });

});// closes document ready//document ready

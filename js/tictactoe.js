
const draw = function (){
  let result = $('.resultsTab');
  let print = result.children();
  print.text("It's a draw");
}

const win = function() {
    if (turn === "x") {
      //checkWinner();
      let result = $('.resultsTab');
      let print = result.children();
      print.text(`Our winner is`);
      $('.scoreB').addClass('animated flash');
    }else {
      //checkWinner();
      let result = $('.resultsTab');
      let print = result.children();
      print.text(`Our winner is `);
      $('.scoreA').addClass('animated flash');
    };

  winner = "yes";
  makeSomeShitGoCrazy();
  addScore();
  displayScore();
  }

const makeSomeShitGoCrazy = function() {
  $('.tic').addClass('animated flip');
  }

const displayScore = function (){
  $(".scoreA p").text(scoreBoard.playerAScore);
  $(".scoreB p").text(scoreBoard.playerBScore);
}

$(document).ready(function () {

  let playA = '';
  let playB = '';

  $('#playAbutton').on('click', function(){
    playA = $('#playA').val();
    // findWinner.winnerA.push = playA;
  });

  $('#playBbutton').on('click', function(){
    playB = $('#playB').val();
    // findWinner.winnerA.push = playB;
  });

  $('.tic').on('click', function () {

    if (playA === '' || playB === ''){
      addNames();
      return;
    }

    if (turn === "x") {
      $('.whosTurn').empty();
      $('.whosTurn').append(`It's your turn ${playB}`);
      }else {
      $('.whosTurn').empty();
      $('.whosTurn').append(`It's your turn ${playA}`);
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

  $('#plaAgaBut').on('click', function () {
    turn = "x";
    winner = "no";
    //winingPlayer = '';
    $('.tic').empty();
    $('.whosTurn').empty();
    $('.tic').removeClass('animated flip');
    playerMoves.playerA.length = 0;
    playerMoves.playerB.length = 0;
    $('.scoreB').removeClass('animated flash');
    $('.scoreA').removeClass('animated flash');
  });


  $('#resBut').on('click', function () {
      turn = "x";
      winner = "no";
      //winingPlayer = '';
      $('.tic').empty();
      $('.whosTurn').empty();
      $('.tic').removeClass('animated flip');
      playerMoves.playerA.length = 0;
      playerMoves.playerB.length = 0;
      scoreBoard.playerAScore = 0;
      scoreBoard.playerBScore = 0;
      $('.scoreB').removeClass('animated flash');
      $('.scoreA').removeClass('animated flash');
      $('.scoreA p').text(scoreBoard.playerAScore);
      $('.scoreB p').text(scoreBoard.playerBScore);
      $('.resetBoard p').trigger('reset');

  });

});// closes document ready//document ready

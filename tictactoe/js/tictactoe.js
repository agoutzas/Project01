
//document ready

$(document).ready(function () {

// // declare variables required to keep info


const moves = [];
const playerAmoves = [];
const playerBMoves = [];
const activePlayer = true;

//start on player A and determine whos turn

// const checkforActive = function () {
//   if (activePlayer = true);
//   //run selectA fucntion
// } else
//  // run selectB function



// const checkingBalance = + $('#checking-balance').text().slice(1);
// if (checkingBalance <= 0) {
//   $('#checking-balance').addClass('zero');
// }


//listen for click;

  $('.tic').on('click', function () {

    console.log($(this));
     $(this).text("x");
     // playerAmoves =  ; // something like this
     // playerAmoves.push (selection) =
  });

});


// add eventlistner for when somebody clicks on a cell add an x or o





// when someone clicks on gameboard send event to database to checkWinners




  // $('.tic').on('click', function () {
  //   const playerAfirstMove = $('#checking-amount').val();
  //   accounts.checkingDeposit( amount );
  //   render();
  //
  //
  // $('#checking-withdraw').on('click', function () {
  //   const amount = $('#checking-amount').val();
  //   accounts.checkingWithdraw( amount );
  //   render();
  // });
  //
  // $('#savings-deposit').on('click', function () {
  //   const amount = $('#savings-amount').val();
  //   accounts.savingsDeposit( amount );
  //   render();
  // });
  //
  // $('#savings-withdraw').on('click', function () {
  //   const amount = $('#savings-amount').val();
  //   accounts.savingsWithdraw( amount );
  //   render();
  // });

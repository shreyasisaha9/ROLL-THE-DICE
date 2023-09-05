'use script';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// const activePlayer = document.getElementById('player--active');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


//CHARISMA OF INIT FUNC
// let currentScore = 0;
// let activePlayer =0;
// let playing = true;
// const scores= [0 , 0];

let currentScore, activePlayer, playing, scores;

const init = function(){

    currentScore = 0;
    activePlayer =0;
    playing = true;
   scores= [0 , 0];

   score0El.textContent = 0;
   score1El.textContent = 0; 
   current0El.textContent =0;
   current1El.textContent = 0;

   player0El.classList.remove('player--winner');
   player1El.classList.remove('player--winner');
   player0El.classList.add('player--active');
   player1El.classList.remove('player--active');
   diceEl.classList.add('hidden');


}
init();


const switchPlayer=  function(){
   document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0 ;
      activePlayer = (activePlayer === 0) ? 1 : 0 ;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');

}

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //adding hidden class

//rolling dice functionality
btnRoll.addEventListener('click', function(){
   if(playing){
    //1.generating a random dice roll
    const dice = Math.trunc( Math.random()*6) + 1;

    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
       //console.log(dice);

    //3.check for rolled 1: if true, switch to next player
     if(dice!==1){
        //add to the current score
        currentScore = currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent =currentScore; //change later

     }else{
        //switch to next player
   //    document.getElementById(`current--${activePlayer}`).textContent = 0;
   //    currentScore = 0 ;
   //    activePlayer = (activePlayer === 0) ? 1 : 0 ;
   //    player0El.classList.toggle('player--active');
   //    player1El.classList.toggle('player--active');
   

   switchPlayer();
     }
   }

});



btnHold.addEventListener('click',  function(){
   //console.log('hold btn');
   if(playing){
   //1. add current score to active players
   scores[activePlayer] += currentScore;
     // scores[1] = scores[1] + currentScore;
   document.getElementById(`score--${activePlayer}`).textContent =scores[activePlayer];

   //2.check if players score is >=100
   if(scores[activePlayer] >= 100){
   //finish the game
   playing = false;
   diceEl.classList.add('hidden');

   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
   document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

   }
   else{
   //switch to the next player
   switchPlayer();
}
   }

});


btnNew.addEventListener('click', function(){

   init();



});





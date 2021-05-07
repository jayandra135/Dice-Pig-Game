/* - the game has 2 players, playing in rounds
- in each turn a player rolls a dice as many times as he wishes. each result get added to his
 round Score.
 - but, if the player rolls a 1, all his round score gets localStorage. after that, its the next player turn.
 - the player can choose to hold, which means that his round score gets added to his global score. after that its
  the next player turn.Score
 - the first player to reach 20 points on global score wins the game. */

var scores,roundScore, activePlayer,dice, gamePlaying;
//first create varibales for personal use or u can use init function
/* scores = [0,0];
roundScore = 0;
activePlayer = 0; */

init();

//dice = Math.floor(Math.random()*6)+1;


//document.querySelector('#current--' + activePlayer).textContent = dice;

/* document.querySelector('.dice').style.display = 'none'; //init()

//init()
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
 */

//button roll
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
    // 1. random number
    dice = Math.floor(Math.random()*6)+1;

    //2. display result
    var diceDom= document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. update round score if the rolled number was not a 1.
    if(dice !== 1){
        //add score
      roundScore +=dice;
      document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }
    else{
        //next player
       nextPlayer();
       //document.querySelector('.player--0').classList.remove('player--active');
       //document.querySelector('.player--1').classList.add('player--active');
        }
    }
   
})

//button hold
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
            // add current score to global score
    scores[activePlayer] += roundScore;
    //update the ui
    document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];
    
    // check if player won the game
    if(scores[activePlayer] >= 20){
        document.querySelector('#name--' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('player--winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('player--active')
        gamePlaying = false;
    }
    else{
        //next player
        nextPlayer();
    }

    }
    
    
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('player--active');
    document.querySelector('.player-1-panel').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
    //document.querySelector('.player--0').classList.remove('player--active');
    //document.querySelector('.player--1').classList.add('player--active');
}
//new game button
document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; 
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
 
    document.getElementById('name--0').textContent = 'Player 0';
    document.getElementById('name--1').textContent = 'Player 1'; 

    document.querySelector('.player-0-panel').classList.remove('player--winner');
    document.querySelector('.player-1-panel').classList.remove('player--winner');
    document.querySelector('.player-0-panel').classList.remove('player--active');
    document.querySelector('.player-1-panel').classList.remove('player--active');
    document.querySelector('.player-0-panel').classList.add('player--active');

}
















/*game function
-player must guess a number between a min and max
-player gets a certain number of guesses
-notify the player of the correct answer if loose
-let player choose to play again
*/
//game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min,max),
  guessesLeft = 3;

//UI element
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }
  //check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct: YOU WIN!`);
    // //Disable input
    // guessInput.disable=true;
    // //change border color
    // guessInput.style.borderColor='green';
    // //set message
    // setMessage(`${winningNum} is correct: YOU WIN!`,'green');
  } else {
    //wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //gave over-lost
      gameOver(
        false,
        `Game Over, You Lost,The Correct Numbar was ${winningNum}`
      );
      // //Disable input
      // guessInput.disable=true;
      // //change border color
      // guessInput.style.borderColor='yellow';
      // //set message
      // setMessage(`Game Over, You Lost,The Correct Numbar was ${winningNum}`,'yellow');
    } else {
      //game continues answer wrong
      //change border color
      guessInput.style.borderColor = "red";
      //clear input
      guessInput.value = "";
      //set message
      setMessage(
        `${guess} is not CORRECT : ${guessesLeft} Guesses left`,
        "red"
      );
    }
  }
});
//game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input
  guessInput.disable = true;
  //change border color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);
  //play Again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//get winning number
function getRandomNum(min,max){
  return  Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

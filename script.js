let number = Math.trunc(Math.random() * 21);

let numberOfGuesses = 4;

document.querySelector(".numberOfGuesses").textContent = 4;

let highOrLow;

const displayGuess = function () {
  document.querySelector(".displayGuess").textContent = highOrLow;
};

const changeText = function () {
  document.querySelector(".displayGuess").style.cssText = "color: brown";
};

let decreaseAttempts = function () {
  numberOfGuesses = numberOfGuesses - 1;
};

document.querySelector("#guessButton").addEventListener("click", function () {
  const guess = document.querySelector("#guess").value;

  if (!guess) {
    highOrLow = "You didn't guess anything!";
    displayGuess();
  } else if (guess > 20) {
    highOrLow = "The number must be between 1 and 20.";
    displayGuess();
  } else if (guess > number) {
    highOrLow = "Too high!";
    displayGuess();
    changeText();
    decreaseAttempts();
    document.querySelector(".numberOfGuesses").textContent = numberOfGuesses;
  } else if (guess < number) {
    highOrLow = "Too low!";
    displayGuess();
    changeText();
    decreaseAttempts();
    document.querySelector(".numberOfGuesses").textContent = numberOfGuesses;
  } else {
    highOrLow = "You got it!";
    displayGuess();
    document.querySelector(".secretNumber").textContent = number;
    document.querySelector(".body").style.cssText = "background-color: green";
    changeText();
  }

  if (numberOfGuesses === 0) {
    highOrLow = `You lost! The number was ${number}.`;
    displayGuess();
    document.querySelector(".body").style.cssText = "background-color: red";
    changeText();
  }
});

//if tryagain button is clicked, reset: the secret number, the number of guesses
document.querySelector(".againButton").addEventListener("click", function () {
  numberOfGuesses = 4;
  number = Math.trunc(Math.random() * 21);
  document.querySelector(".numberOfGuesses").textContent = 4;
  highOrLow = "The number is...";
  displayGuess();
  document.querySelector(".body").style.cssText = "background-color: white";
  document.querySelector(".displayGuess").style.cssText = "color: black";
});

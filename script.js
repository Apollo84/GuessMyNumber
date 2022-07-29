let number = Math.trunc(Math.random() * 21);

let numberOfGuesses = 4;
document.querySelector(".numberOfGuesses").textContent = 4;

document.querySelector("#guessButton").addEventListener("click", function () {
  const guess = document.querySelector("#guess").value;

  if (!guess) {
    document.querySelector(".displayGuess").textContent =
      "You didn't guess anything!";
  } else if (guess > 20) {
    document.querySelector(".displayGuess").textContent =
      "The number must be between 1 and 20.";
  } else if (guess > number) {
    document.querySelector(".displayGuess").textContent = "Too high!";
    document.querySelector(".displayGuess").style.cssText = "color: red";
    numberOfGuesses = numberOfGuesses - 1;
    document.querySelector(".numberOfGuesses").textContent = numberOfGuesses;
  } else if (guess < number) {
    document.querySelector(".displayGuess").textContent = "Too low!";
    document.querySelector(".displayGuess").style.cssText = "color: red";
    numberOfGuesses = numberOfGuesses - 1;
    document.querySelector(".numberOfGuesses").textContent = numberOfGuesses;
  } else {
    document.querySelector(".displayGuess").textContent = "You got it!";
    document.querySelector(".secretNumber").textContent = number;
    document.querySelector(".body").style.cssText = "background-color: green";
    document.querySelector(".displayGuess").style.cssText = "color: black";
  }

  if (numberOfGuesses === 0) {
    document.querySelector(
      ".displayGuess"
    ).textContent = `You lost! The number was ${number}.`;
    document.querySelector(".body").style.cssText = "background-color: red";
    document.querySelector(".displayGuess").style.cssText = "color: black";
  }
});

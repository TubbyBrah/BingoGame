var numbersCalled = [];

function generateRandomNumber() {
  return Math.floor(Math.random() * 90) + 1;
}

function callNumber() {
  var calledNumber = generateRandomNumber();
  while (numbersCalled.includes(calledNumber)) {
    calledNumber = generateRandomNumber();
  }
  numbersCalled.push(calledNumber);

  var calledNumberElement = document.getElementById("called-number");
  var previousNumbersElement = document.getElementById("previous-numbers");

  calledNumberElement.textContent = "" + calledNumber;
  
  // Display previous numbers called
  previousNumbersElement.textContent = "Previous Numbers Called: " + numbersCalled.join(", ");


// Check if all numbers have been called
if (numbersCalled.length === 90) {
  alert("Bingo! All 90 numbers have been called. Click the start new game button to start a new game");

  // Enable the new game button
  // Enable the new game button and display it
  var newGameButton = document.getElementById("new-game-button");
  newGameButton.style.display = "block";
}
}

// Add an event listener to the new game button
var newGameButton = document.getElementById("new-game-button");
newGameButton.addEventListener("click", function() {
// Reload the page to start a new game
location.reload();
});

// Initially hide the new game button
newGameButton.style.display = "none";



// function startNewGame() {
//     numbersCalled = [];
//     document.getElementById("called-number").textContent = "";
//     document.getElementById("previous-numbers").textContent = "";
//   }

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
}

// function startNewGame() {
//     numbersCalled = [];
//     document.getElementById("called-number").textContent = "";
//     document.getElementById("previous-numbers").textContent = "";
//   }

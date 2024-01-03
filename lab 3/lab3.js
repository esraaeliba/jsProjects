/////////////////////////////////// LAB 3 ////////////////////////////////////////////////////

//PDF 1:
//first question:

var userName = prompt("Enter Your Username");
var password = prompt("Enter Your Password");
if (userName === "admin" && password === "421$$") {
  alert("Welcome login success");
} else if (userName != "admin" && password != "421$$") {
  alert("Wrong Username & Password try again..");
} else if (userName != "admin") {
  alert("Wrong Username , try again..");
} else {
  alert("Wrong Password , try again..");
}

//second question and the bonus:

var result = 0;
var firstNumber;
var operation;
var secondNumber;

while (true) {
  if (result == 0) {
    firstNumber = parseFloat(prompt("Enter first number"));
    operation = prompt("Enter an operation(+,-,/,*,%)");
    secondNumber = parseFloat(prompt("Enter Second number"));
  } else {
    firstNumber = result;
    operation = prompt("Enter an operation(+,-,/,*,%)");
    secondNumber = parseFloat(prompt("Enter Second number"));
  }

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "%":
      result = firstNumber % secondNumber;
      break;
    default:
      alert("Unvalid inputs");
  }
  window.alert(`The result is ${result}`);
}

//PDF 2 :
//first question:

function calculateSumAndAverage() {
  var numberOfValues = parseInt(
    prompt("Enter How Many Numbers You Want to Sum")
  );
  if (isNaN(numberOfValues) || numberOfValues <= 0) {
    alert("Please enter a valid positive integer.");
  }
  var numbers = [];
  for (let i = 0; i < numberOfValues; i++) {
    var value = parseFloat(prompt(`Enter value #${i + 1}:`));
    if (isNaN(value)) {
      alert("Please enter valid numbers.");
    }
    numbers.push(value);
  }
  var sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  var average = sum / numberOfValues;
  window.alert(`Sum is:${sum} , Average is:${average}`);
}
calculateSumAndAverage();


//second question:

var contacts = [];
function addContact() {
  var name = prompt("Enter the name of the contact");
  var phoneNumber = prompt("Enter the phone number");

  var contact = {
    name: name,
    phoneNumber: phoneNumber,
  };
  contacts.push(contact);
  alert(`Contact "${name}" added successfully.`);
}
function searchContact() {
  var searchTerm = prompt(
    "Enter something to search for (name or phone number):"
  );
  var foundContact = contacts.find(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
  );
  if (foundContact) {
    alert(
      `Contact found:  \n Name: ${foundContact.name} \n Phone Number: ${foundContact.phoneNumber}`
    );
  } else {
    alert(`Contact not found.`);
  }
}
function phoneBookApp() {
  while (true) {
    var operationPhonebook = prompt(
      "Enter operation ('add' or 'search', or 'exit' to end):"
    );
    switch (operationPhonebook.toLowerCase()) {
      case "add":
        addContact();
        break;
      case "search":
        searchContact();
        break;
      case "exit":
        alert("Phone book app ended.");
        return;
      default:
        alert("Invalid operation. Please enter 'add', 'search', or 'exit'.");
    }
  }
}
phoneBookApp();

///////////////////////////////////////// LAB 1 //////////////////////////////////////////
// FIRST QUESTION:

var firstName = prompt("Enter Your First Name", "");
var lasttName = prompt("Enter Your Last Name", "");
var fullName = firstName + " " + lasttName;
var fullName = confirm("Your Full Name is " + fullName);
var age = prompt("Enter Your Age");
document.write(`Welcome ${firstName} ${lasttName} your age is ${age}.`);

//SECOND QUESTION:

alert(
  "it’s the first release of a calculator that only has a summation feature. "
);
var firstNumber = prompt("Enter First Number");
var secondNumber = prompt("Enter Second Number");
var result = Number(firstNumber) + Number(secondNumber);
alert(`The Sum Of the Two Numbers is ${result}`);

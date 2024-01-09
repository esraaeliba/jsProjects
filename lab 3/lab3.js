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

  if (firstNumber === null || operation === null || secondNumber === null) {
    break;
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

//BONUS:
while(true){
function calculateArea() {
  const shape = prompt("Enter the name of the shape (circle, triangle, square, rectangle, parallelogram, trapezium, ellipse):").toLowerCase();

  switch (shape) {
    case "circle":
      const radius = parseFloat(prompt("Enter the radius of the circle:"));
      if (!isNaN(radius)) {
        const circleArea = Math.PI * radius ** 2;
        alert(`The area of the circle is: ${circleArea}`);
      } else {
        alert("Please enter a valid number for the radius.");
      }
      break;

    case "triangle":
      const base = parseFloat(prompt("Enter the base length of the triangle:"));
      const height = parseFloat(prompt("Enter the height of the triangle:"));
      if (!isNaN(base) && !isNaN(height)) {
        const triangleArea = 0.5 * base * height;
        alert(`The area of the triangle is: ${triangleArea}`);
      } else {
        alert("Please enter valid numbers for base and height.");
      }
      break;

    case "square":
      const sideLength = parseFloat(prompt("Enter the length of a side of the square:"));
      if (!isNaN(sideLength)) {
        const squareArea = sideLength ** 2;
        alert(`The area of the square is: ${squareArea}`);
      } else {
        alert("Please enter a valid number for the side length.");
      }
      break;

    case "rectangle":
      const length = parseFloat(prompt("Enter the length of the rectangle:"));
      const width = parseFloat(prompt("Enter the width of the rectangle:"));
      if (!isNaN(length) && !isNaN(width)) {
        const rectangleArea = length * width;
        alert(`The area of the rectangle is: ${rectangleArea}`);
      } else {
        alert("Please enter valid numbers for length and width.");
      }
      break;

    case "parallelogram":
      const basePara = parseFloat(prompt("Enter the base length of the parallelogram:"));
      const heightPara = parseFloat(prompt("Enter the height of the parallelogram:"));
      if (!isNaN(basePara) && !isNaN(heightPara)) {
        const parallelogramArea = basePara * heightPara;
        alert(`The area of the parallelogram is: ${parallelogramArea}`);
      } else {
        alert("Please enter valid numbers for base and height.");
      }
      break;

    case "trapezium":
      const sideA = parseFloat(prompt("Enter the length of side A of the trapezium:"));
      const sideB = parseFloat(prompt("Enter the length of side B of the trapezium:"));
      const heightTrap = parseFloat(prompt("Enter the height of the trapezium:"));
      if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(heightTrap)) {
        const trapeziumArea = 0.5 * (sideA + sideB) * heightTrap;
        alert(`The area of the trapezium is: ${trapeziumArea}`);
      } else {
        alert("Please enter valid numbers for side lengths and height.");
      }
      break;

    case "ellipse":
      const MajorAxis = parseFloat(prompt("Enter the major axis length of the ellipse (half of the major axis):"));
      const MinorAxis = parseFloat(prompt("Enter the minor axis length of the ellipse (half of the minor axis):"));
      if (!isNaN(MajorAxis ) && !isNaN(MinorAxis )) {
        const ellipseArea = Math.PI * MajorAxis * MinorAxis ;
        alert(`The area of the ellipse is: ${ellipseArea}`);
      } else {
        alert("Please enter valid numbers for semi-major and semi-minor axes.");
      }
      break;

    default:
      alert("Invalid shape entered. Please try again.");
  }
}

// Call the function to start the area calculation process
calculateArea();
}


//pdf3
//ex1
 var person = 
 { 
     name: 'John',
     age: 25,
     city: 'New York' 
 };
// //1
 var keys = Object.keys(person); //returns an array of a given object's own property names
 console.log(keys); // Output: ['name', 'age', 'city']
// //2
 var properties = Object.getOwnPropertyNames(person); //returns an array of all properties (enumerable or not) found directly upon a given object
 console.log(properties); // Output: ['name', 'age' , 'city']
// //3
 var values = Object.values(person); //returns an array of a given object's own property values
 console.log(values); // Output: ['John', 25, 'New York'] 
// //4
 var entries = Object.entries(person); //returns an array of a given object's own enumerable property [key, value] pairs
 console.log(entries); // Output: [['name', 'John'], ['age', 25], ['city', 'New York']]
// //5
 console.log(person.hasOwnProperty('name')); // Output: true , returns a boolean indicating whether the object has the specified property as its own property
 console.log(person.hasOwnProperty('gender')); // Output: false
// //6
 Object.seal(person); //trying to add or delete properties will not work, but existing properties can be modified.
 person.status = 'Married'; // This operation is not allowed
 person.age = 26; // This is allowed
// //7
 var descriptors = Object.getOwnPropertyDescriptors(person);
 console.log(descriptors);
 /* Output: { name: { value: 'John', writable: true, enumerable: true, configurable: true },
            age: { value: 25, writable: true, enumerable: true, configurable: true } },
            city: { value: 'New York', writable: true, enumerable: true, configurable: true } */

// //8
 Object.seal(person); //trying to add or delete properties will not work, but existing properties can be modified.
 person.status = 'Married'; // This operation is not allowed
 person.age = 26; // This is allowed
// //9
 Object.preventExtensions(person); //like seal
 person.city = 'New York'; // This operation is not allowed
// //10
 Object.freeze(person); /*Freezes an object, preventing new properties from being added and existing properties from being removed or modified,
 trying to modify the frozen object will result in an error*/
 person.age = 26; //will result in an error


//ex2
 var numbers = [1, 2, 3];
// //1
 var newLength = numbers.push(4, 5); //adds one or more elements to the end of an array and returns the new length of the array
 console.log(numbers); // Output: [1, 2, 3, 4, 5]
 console.log(newLength); // Output: 5
// //2
 var removedElement = numbers.pop(); //removes the last element from an array and returns that element
 console.log(numbers); // Output: [1, 2, 3, 4]
 console.log(removedElement); // Output: 5
// //3
 var newLength = numbers.unshift(-1, 0); //adds one or more elements to the beginning of an array and returns the new length of the array
 console.log(numbers); // Output: [-1,0,1, 2, 3, 4, 5]
 console.log(newLength); // Output: 7
// //4
 var numbers = [1, 2, 3, 4, 5];
 var removedElement = numbers.shift(); //removes the first element from an array and returns that element
 console.log(numbers); // Output: [2, 3, 4, 5]
 console.log(removedElement); // Output: 1
// //5
 var numbers = [1, 2, 3, 4, 5];
var slicedArray = numbers.slice(1, 4); //returns a shallow copy of a portion of an array into a new array. The original array is not modified
 console.log(slicedArray); // Output: [2, 3, 4]
// //6
 var numbers = [1, 2, 3, 4, 5];
 var removedElements = numbers.splice(1, 2, 6, 7); //changes the contents of an array by removing or replacing existing elements and/or adding new elements
 console.log(numbers); // Output: [1, 6, 7, 4, 5]
 console.log(removedElements); // Output: [2, 3]
// //7
 var numbers = [1, 2, 3, 4, 5];
 var index = numbers.indexOf(3); //returns the first index at which a given element can be found in the array, or -1 if it is not present
 console.log(index); // Output: 2
// //8
 var numbers = [1, 2, 3, 4, 5, 3];
 var lastIndex = numbers.lastIndexOf(3); //returns the last index at which a given element can be found in the array, or -1 if it is not present
 console.log(lastIndex); // Output: 5
// //9
 var numbers = [1, 2, 3, 4, 5];
 var evenNumbers = numbers.filter(number => number % 2 === 0); //creates a new array with all elements that pass the test implemented by the provided function
 console.log(evenNumbers); // Output: [2, 4]
// //10
 var numbers = [1, 2, 3, 4, 5];
 var squaredNumbers = numbers.map(number => number * number); //creates a new array populated with the results of calling a provided function on every element in the array
 console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//ex3
 function outerFunction(outerParam) {
//     // This is the outer function's scope
     console.log(`Outer function received parameter: ${outerParam}`);

//     // Nested function definition
     function innerFunction(innerParam) {
//         // This is the inner function's scope
         console.log(`Inner function received parameter: ${innerParam}`);
         console.log(`Accessing outer function's parameter: ${outerParam}`);
     }

//     // Returning the nested function
     return innerFunction;
 }

// // Using the outer function
 const outerFuncResult = outerFunction('OuterValue');

// // Now, outerFuncResult holds the reference to innerFunction
// // It forms a closure, capturing the lexical environment of outerFunction

// // Using the inner function through the closure
 outerFuncResult('InnerValue');








/////////////////////////////////////////// LAB 2 //////////////////////////////////////////
//first question:

var age = prompt("Please enter your age:");

while (age !== null) {
  age = parseInt(age);

  if (!isNaN(age) && age > 0) {
    let status;

    if (age >= 1 && age <= 10) {
      status = "Child";
    } else if (age >= 11 && age <= 18) {
      status = "Teenager";
    } else if (age >= 19 && age <= 50) {
      status = "Grown up";
    } else {
      status = "Old";
    }

    alert(`Your age status is: ${status}`);
  } else {
    alert("Please enter a valid positive number for age.");
  }

  age = prompt("Please enter your age:");
}

//second question:

var text = prompt("Please enter a string:");

if (text !== null) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  alert(`The number of vowels in the string is: ${count}`);
} else {
  alert("No string entered. Please try again.");
}

//third question:

function convert(hour) {
  if (hour === 0) {
    return "12AM";
  } else if (hour === 12) {
    return "12PM";
  } else if (hour < 12) {
    return hour + "AM";
  } else {
    return hour - 12 + "PM";
  }
}

console.log(convert(0));
console.log(convert(11));
console.log(convert(13));

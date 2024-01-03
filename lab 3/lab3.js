/////////////////////////////////// LAB 3 ////////////////////////////////////////////////////


//first question:

var userName = prompt("Enter Your Username");
var password = prompt("Enter Your Password");
 if (userName === 'admin' && password === '421$$'){
     alert('Welcome login success');
    
 }
 else if (userName != 'admin' && password != '421$$') 
 {
     alert('Wrong Username & Password try again..');
 } 
 else if (userName != 'admin') 
 {
     alert('Wrong Username , try again..'); 
 } 
 else 
 {
     alert('Wrong Password , try again..');
 } 

//second question and the bonus:

var result=0;
var firstNumber; 
var operation;
var secondNumber;
 
while (secondNumber !== null){
if (result==0)
{
  firstNumber = parseFloat(prompt("Enter first number"));
  operation = prompt("Enter an operation(+,-,/,*,%)");
  secondNumber = parseFloat(prompt("Enter Second number"));
}
else 
{
  firstNumber=result;
  operation = prompt("Enter an operation(+,-,/,*,%)");
  secondNumber = parseFloat(prompt("Enter Second number"));
}

 
 switch(operation)
 {
     case '+':
         result=firstNumber+secondNumber;
         break;
     case '*':
         result=firstNumber*secondNumber;
         break;
     case '/':
         result=firstNumber/secondNumber;
         break;
     case '-':
         result=firstNumber-secondNumber;
         break;
     case '%':
         result=firstNumber%secondNumber;
         break;    
     default:
         alert('Unvalid inputs');
 }
 window.alert(`The result is ${result}`);
}



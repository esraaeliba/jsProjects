function Person (fullName, money, sleepMood, healthRate){
    this.name=fullName;
    this.money=money;
    this.sleepMood=sleepMood;
    this.healthRate=healthRate;
}
Person.prototype.sleep=function(hours){
    if (hours===7){
        this.sleepMood='happy';
    }else if (hours<7){
        this.sleepMood='tired';
    }else {
        this.sleepMood='lazy';
    }

}

Person.prototype.eat=function(meals){
switch(meals){
case 1:
    this.healthRate=100;
break;    
case 2:
    this.healthRate=75;
break;    
case 3:
    this.healthRate=50;   
break;         
}
}
Person.prototype.buy=function(items){
    this.money -= items * 10;
}
function Employeee(id, email, workMood, salary, isManager){
    this.id=id;
    this.email=email;
    this.workMood=workMood;
    this.salary=salary;
    this.isManager=isManager;
    this.salary=salary>=1000 ? salary : 1000;
}
Object.setPrototypeOf(Employeee,Person);
Employeee.prototype.work=function(hours){
    if(hours===8){
        this.workMood='happy';
    }
    else if(hours>8){
        this.workMood='tired'
    }
    else{
        this.workMood='lazy';
    }
}
function office(name){
    this.name=name;
    this.employees=[];
} 
office.prototype.getAllEmployees=function(){
    return this.employees;
}
office.prototype.getEmployee=function(empId){
    for(let i=0;i<this.employees.length;i++){
        if(this.employees[i]===empId){
            const employeeCopy = Object.assign({}, this.employees[i]);
            if (employeeCopy.isManager) {
                delete employeeCopy.salary;
            }
            return employeeCopy;
        }
    }
    return null;
}
office.prototype.hire=function(employee){
    const existingEmployee = this.employees.find(emp=>emp.id===Employeee.email);
    if (!existingEmployee){
        this.employees.push(employee);
        alert(`Employee with email ${Employeee.email} hired successfully.`);
    } else {
        alert(`Employee with email ${Employeee.email} already exists.`);
    }
}
office.prototype.fire=function(empId){
    const index = this.employees.findIndex(emp => emp.id === empId);
    if (index !== -1) {
            const removedEmployee = this.employees.splice(index, 1)[0];
            alert(`Employee with email ${empId} (${removedEmployee.name}) fired successfully.`);
        } else {
            alert(`Employee with email ${empId} not found.`);
        }
    }

const myOffice = new office("Tech Company");

        function promptUser() {
            alert(`\nMenu:
            1. Add new employee (enter 'add')
            2. If manager press 'mngr'
            3. If normal employee press 'nrml'
            4. Get all employees (enter 'getall')
            5. Get employee details by EMAIL (enter 'getemp')
            6. Fire employee (enter 'fire')
            7. Quit the application (enter 'q')
            `);

            const choice = prompt(`Enter your choice:`);
            handleUserChoice(choice);
            if (choice.toLowerCase() !== 'q') {
                promptUser();
            }
        }

        function handleUserChoice(choice) {
            switch (choice.toLowerCase()) {
                case 'add':
                    promptAddEmployee();
                    break;
                case 'mngr':
                    promptAddManager();
                    break;
                case 'nrml':
                    promptAddNormalEmployee();
                    break;
                case 'getall':
                    alert("All Employees:", myOffice.getAllEmployees());
                    break;
                case 'getemp':
                    promptGetEmployeeDetails();
                    break;
                case 'fire':
                    promptFireEmployee();
                    break;
                case 'q':
                    alert("Quitting the application.");
                    break;
                default:
                    alert("Invalid choice. Please try again.");
                    break;
            }
        }

        function promptAddEmployee() {
            alert("\nEnter employee details:");
            const name = prompt("Name: ");
            const email = prompt("Email: ");
            const workMood = prompt("Work Mood: ");
            const salary = parseInt(prompt("Salary: "));
            const isManager = confirm("Is Manager?");

            const Employee = new Employeee(myOffice.employees.length + 1, email, workMood, salary, isManager);
            myOffice.hire(employee);
            alert(`Employee with email ${Employeee.email} hired successfully.`);
        }

        function promptAddManager() {
            alert("\nEnter manager details:");
            const name = prompt("Name: ");
            const email = prompt("Email: ");
            const workMood = prompt("Work Mood: ");
            const salary = parseInt(prompt("Salary: "));

            const manager = new Employeee(myOffice.employees.length + 1, email, workMood, salary, true);
            myOffice.hire(manager);
            alert(`Manager with email ${manager.email} hired successfully.`);
        }

        function promptAddNormalEmployee() {
            alert("\nEnter normal employee details:");
            const name = prompt("Name: ");
            const email = prompt("Email: ");
            const workMood = prompt("Work Mood: ");
            const salary = parseInt(prompt("Salary: "));

            const normalEmployee = new Employeee(myOffice.employees.length + 1, email, workMood, salary, false);
            myOffice.hire(normalEmployee);
            alert(`Employee with email ${normalEmployee.email} hired successfully.`);
        }
        function promptGetEmployeeDetails() {
            const empId = prompt("Enter employee Email: ");
            const employeeDetails = myOffice.getEmployee(empId);
            if (employeeDetails) {
                alert(`Employee Details: `,employeeDetails);
            } else {
                alert(`Employee not found with Email:`,empId);
            }
        }
        function promptFireEmployee() {
            const empId = prompt("Enter employee Email to fire: ");
            const beforeFire = myOffice.getAllEmployees();
            myOffice.fire(empId);
            const afterFire = myOffice.getAllEmployees();
            if (beforeFire.length > afterFire.length) {
                alert(`Employee with email ${empId} fired successfully.`);
            } else {
                alert(`Employee with email ${empId} not found.`);
            }
        }

        promptUser();



        //part2
/*
Definition: An abstract class in object-oriented programming serves as a blueprint for other classes but cannot be instantiated on its own.
Methods: Abstract classes can have both abstract methods (methods without a body) and concrete methods (methods with a body).
Properties: They can have member variables (fields) and constructors.
Usage: Often used as a base class for other classes, providing common functionality while allowing derived classes to implement specific details.
Interface:
Definition: An interface defines a contract for classes that implement them, specifying the method signatures (and properties) that implementing classes must have.
Methods: Only method signatures are allowed; interfaces do not contain any implementation.
Properties: Can declare properties that implementing classes must provide.
Usage: Used to define a contract that multiple classes can adhere to, ensuring a consistent structure.
Key Differences:
Abstract classes allow a mix of abstract and concrete methods, while interfaces only allow method signatures.
A class can extend only one abstract class, but it can implement multiple interfaces.
Abstract classes can have constructors and member variables, whereas interfaces cannot.
Use Cases:
Use abstract classes when you want a common base class that should not be instantiated on its own and can provide some shared functionality.
Use interfaces when you want to define a contract that multiple classes can adhere to, promoting a consistent structure.
2. Inheritance in Function Constructor:
Function Constructor:
Definition: In JavaScript, constructor functions serve as blueprints for creating objects, and they can include both properties and methods.
Properties and Methods: Shared properties and methods are typically added to the constructor's prototype to be inherited by instances.
Inheritance:
Definition: Inheritance in JavaScript is achieved through the prototype chain.
Setting up Inheritance: The prototype of one constructor function can be set to an instance of another constructor function.
Constructor Chaining: It involves calling the parent constructor using call to initialize properties specific to the child constructor.
Key Points:
Inheritance in JavaScript is based on the prototype chain.
Objects inherit properties and methods from their prototype.
Constructor functions and prototypes provide a way to implement a form of inheritance in JavaScript.
*/
// Task 3  -  Looping Statements

//1. Print Numbers - from 1 to 20 using for loop

for (let a = 1; a <= 20; a++) {
    console.log(a);

}

//2. Odd Numbers - from 1 to 50 

for (let a = 1; a <= 50; a++) {
    if (a % 2 == 1) {
        console.log("Odd number :", a);

    }
}

//3. Multiplication Table of 7

for (let a = 1; a <= 16; a++) {
    let b = 7 * a;
    console.log("7 * " + a + " = ", b);

}

//4. Reverse Counting  -  from 20  to 1 using while loop

let number = 20;
while (number >= 1) {
    console.log(number);
    number--;

}

//5. Sum of Numbers  -  from 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Sum :", sum);                            //Ans: Sum : 5050

//6. Array loop  -  print all values

let fruitArr = ["apple", "banana", "orange", "grapes"]   //Ans: apple
for (let a of fruitArr) {                                //     banana
    console.log(a);                                      //     orange
}                                                        //     grapes

//7. Count Even numbers  -  from 1 to 50

let count = 0;
for (let a = 1; a <= 50; a++) {
    if (a % 2 == 0) {
        count = count + 1;
    }
}
console.log("Count :", count);                      //Ans: Count : 25

//8. Star pattern

for (let i = 1; i <= 5; i++) {                     //Ans: *
    let star = "";                                 //     **
    for (let j = 1; j <= i; j++) {                 //     ***
        star = star + "*" ;                        //     ****        
    }                                              //     *****
    console.log(star);

}

//9. Functions
// Create function named welcome() that prints Welcome to JavaScript

function welcome(){
    console.log("Welcome to JavaScript");
    
}                                         //Ans: Welcome to JavaScript  
welcome()

//10. Function with parameter
// Create a function that accepts a name and prints: Hello Naveen

function name(name){
    console.log("Hello", name);
    
}                                          // Ans: Hello Naveen
name("Naveen")

//11. Add two numbers
// Create a function that takes 2 numbers and returns the addition

function add(n1,n2){
    return n1 + n2;
}                                          //Ans: Sum: 35
console.log("Sum:",add(10,25));

//12. Salary Bonus 
// Create a function that adds bonus to the employee salary

function empsalary(salary,bonus){
    return salary + bonus;                 //Ans: Employee Salary: 55000
}
console.log("Employee Salary:", empsalary(50000,5000));

//13. Object  loop  -  print all keys and values using for in loop

let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
}
for(let a in student){
    console.log(a , ":" , student[a]);
    
}

//14. Find Largest Number 
// Create a function to find the largest number between two values

function largestNum(n1,n2) {
    if (n1 > n2) {
        return n1;
    }else{
        return n2;                        //Ans: Largest Number: 500  
    }
}
console.log("Largest Number:" , largestNum(100,500));

//15. Mini Employee Task
// Create an employee object and print:
//  Employee Name, Department, Salary, Salary after bonus
// Using: object, function, parameter, console.log()

function employeeDetails(name,dept,salary,salWithBonus) {
    let employee = {
    employeeName : name,
    department : dept,
    salary : salary,
    salaryWithBonus : salWithBonus
}
console.log("Employee Name:", employee.employeeName);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Salary With Bonus:", employee.salaryWithBonus);

}
employeeDetails("John","Developer",50000,55000)
// Task 4

//1. Basic Function
// Create a function called welcomeUser
// Requirements: Accept name, print: Welcome name

function welcomeUser(name){
    console.log("Welcome", name);
    
}                                          // Ans: Welcome Naveen
welcomeUser("Naveen")

//2. Parameter + Return
// Create a function SquareNumber
// Requirements: Accept one number, return square value

function squareNumber(number) {
    return number * number;               // Ans: Square value: 25
}
console.log("Square value:",squareNumber(5));

//3. Object Function
// Create an object which has name and salary
// Requirements: Create a function named employeeBonus(bonus), return name and salary with bonus

let employee = {
    name : "Rahul",
    salary : 50000
}
function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
    
}                                            // Ans: Rahul
employeeBonus(5000)                          //      55000

//4. Scope Checking
// Inside a function: Create var, let, const
// Requirements: Try accessing them outside block, observe which works and which gives error

function scope() { 
    if(true){
    var v = "var variable" ;
    let l = "let variable" ;
    const c0 = "const variable" ;
    }
    console.log(v);
   // console.log(l);                   // Ans: Uncaught ReferenceError: l is not defined
  //  console.log(c0);                  //      Uncaught ReferenceError: c0 is not defined

}
scope()

//5. Arrow Function
// Convert this into function:
//    function add(a,b){
//       console.log(a+b);        
//    }
    
var add = (a,b)=>{
    console.log(a+b);                  // Ans: 15
}
add(8,7)

//6. Callback Function
// Create: multiply, calculator
// Requirements: calculator should accept: callback function, two numbers

function multiply(a,b) {
    console.log(a*b);
    
}
function calculator(callback,n1,n2) {
    callback(n1,n2);
}
calculator(multiply,5,8)               // Ans: 40

//7. Generator Function
// Create generator function offers
// Requirements: yield: "50% OFF", "Free Delivery", "Cashback"
// Use: next()  to print values one by one

function*offers(){
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"
}
let offerValue = offers();
console.log(offerValue.next().value);       // Ans: 50% OFF
console.log(offerValue.next().value);       //      Free Delivery
console.log(offerValue.next().value);       //      Cashback

//8. Default Parameter
// Create: student(name,course="JavaScript")
// Requirements: if course not passed, default should become "Javascript"

function studentDetails(name,course="JavaScript"){
    console.log("Name:",name);
    console.log("Course:",course);
    
}                                           // Ans: Name: Sharmitha
studentDetails("Sharmitha")                 //      Course: JavaScript

//9. Currying
// Create currying function for multiplication - ex: multi(2)(3)(4) - o/p : 24

function multi(n1){
    return function(n2){
        return function(n3){
            console.log(n1*n2*n3);
            
        }
    }
}
multi(5)(4)(3)                             // Ans: 60

//10. Spread Operator
// Merge these arrays: [1,2,3] [4,5,6] - o/p : [1,2,3,4,5,6]

let array1 = [1,2,3];
let array2 = [4,5,6];
let totalArr = [...array1,...array2];
console.log(totalArr);                     // Ans: [1,2,3,4,5,6]

//11. Object Spread
// Merge two objects: {name:"Navi"} {role:"Developer"}
// Output: {
//           name:"Navi",
//           role:"Developer"
//         }

let ob1 = {
    name:"Navi"
}
let ob2 = {
    role:"Developer"
}
let totalObj = {...ob1,...ob2};
console.log(totalObj);                    // Ans: {name: 'Navi', role: 'Developer'}

//12. Rest Operator
// Create function: numbers(...num)
// Requirements: print all numbers, print total sum
//Ex: numbers(1,2,3,4)  o/p : [1,2,3,4] ,  sum = 10

function restOp(...num){
    console.log(num);
    console.log(num[0]+num[1]+num[2]+num[3]);
    
}                                        // Ans: [1,2,3,4]
restOp(1,2,3,4)                          //      10

//13. Mini Challenge
// Create one small Student Management System using: 
// function, callback, object, array, spread operator, rest operator
// Features: Add student, Print students, Calculate marks, Add bonus marks


function name(...name){
    return "Name:",name[0] ;
    return "Name:",name[1] ;
}                                       

function marks(a,b,c) {
    return "Marks:",a+b+c;
    
}
function calculateMarks(callback,m1,m2,m3) {
   return callback(m1,m2,m3);
}

function bonusMark(bonus) {
    return "BonusMarks:",bonus;
    
}

function sD() {
  let sD1 = {  
   name1: name("Rahul"),
   marks1: calculateMarks(marks,85,89,92),
   bonusMark1: bonusMark(9)
  }
  let sD2 = {  
   name2: name("Ram"),
   marks2: calculateMarks(marks,88,95,92),
   bonusMark2: bonusMark(10)
  }
  let totalSD = {...sD1,...sD2};
  console.log(totalSD); 
}
sD()


